import useOnClickOutside from "@/hooks/useOnClickOutside";
import { useRef } from "react";

interface ModalProps {
  children: React.ReactNode;
  activeModal: boolean;
  closeModal: () => void;
}

function Modal({ children, activeModal, closeModal }: ModalProps) {
  const modalRef = useRef(null)
  useOnClickOutside(modalRef, closeModal)
  return (
    <div className={`w-screen lg:h-screen bg-black/60 absolute top-[72px] bottom-0 lg:top-0 right-0 ${activeModal ? 'visible opacity-1' : 'invisible opacity-0'} transition-all z-0
      h-[calc(100%-72px)]
    `}
      ref={modalRef}
    >
      <div className="bg-white w-full md:max-w-[720px] h-full md:rounded-r-[20px] dark:bg-invoice-dark overflow-auto">
        <div className="px-6 md:px-14 pt-[33px] md:pt-[59px] lg:pl-[159px] lg:pt-16  pb-8 h-full">
          { children } 
        </div>
      </div>
    </div>
  )
}

export { Modal }