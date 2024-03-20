import { RefObject, useCallback, useEffect } from "react";
type EventType = 'mousedown' | 'mouseup' | 'touchstart' | 'touchend'

function useOnClickOutside<T extends HTMLElement = HTMLElement> (ref: RefObject<T>, handler: () => void, eventType: EventType = 'mousedown'){
  const outSideClickHandler = useCallback(({ target }: MouseEvent | TouchEvent) => {
    const isOutsideClick = ref.current && !ref.current.contains(target as Node) || ref.current === target

    if (!target) {
      return
    }

    if(isOutsideClick) {
      handler()
    }
  }, [ref, handler])
  
  useEffect(() => {
    if(!ref.current) return;
    const component = ref.current
    component.addEventListener(eventType, outSideClickHandler)

    return () => {
      component.removeEventListener(eventType, outSideClickHandler)
    }
  }, [ref, handler, eventType, outSideClickHandler])
}

export default useOnClickOutside