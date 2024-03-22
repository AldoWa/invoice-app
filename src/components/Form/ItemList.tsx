import Image from "next/image";
import { Input } from "../Input";

import DeleteIcon from '@/assets/icon-delete.svg'
import { Button } from "../Button";
import { useState } from "react";

type ItemListProps = {
  itemNome: string;
  qty: number;
  price: number;
  total: number;
}

function ItemList() {
  const [items, setItems] = useState<ItemListProps[]>([])

  function createItem(){
    setItems(items => [...items, {
      itemNome: '',
      price: 0,
      qty: 0,
      total: 0
    }])
  }

  function deleteItem(index: number){
    const newItems = items.filter((item, i) => i !== index)
    setItems(newItems)
  }
  
  return (
    <>
      <table>
        <thead >
          <tr>
            <th className="text-start text-invoice-07 dark:text-invoice-05 tracking-tighter text-[0.8125rem] leading-[0.9375rem] min-w-[232px]">Item nome</th>
            <th className="text-start text-invoice-07 dark:text-invoice-05 tracking-tighter text-[0.8125rem] leading-[0.9375rem] min-w-[73px]">Qty.</th>
            <th className="text-start text-invoice-07 dark:text-invoice-05 tracking-tighter text-[0.8125rem] leading-[0.9375rem] min-w-[100px]">Price</th>
            <th className="text-start text-invoice-07 dark:text-invoice-05 tracking-tighter text-[0.8125rem] leading-[0.9375rem] min-w-[56px]">Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="pt-4 pr-4">
                <Input
                  className="max-w-[216px] w-full"
                ></Input>
              </td>
              <td className="pt-4 pr-4">
                <Input
                  className="max-w-14 p-0 pl-3"
                  type="number"
                ></Input>
              </td>
              <td className="pt-4 pr-4">
                <Input
                  className="max-w-[100px]"
                ></Input>
              </td>
              <td className="pt-4 pr-4 text-invoice-07 dark:text-invoice-05 text-[0.9375rem] leading-[0.9375rem] tracking-widest">
                { item.total }
              </td>
              <td className="pt-4 pr-4">
                <button onClick={() => deleteItem(index)}>
                  <Image
                    src={DeleteIcon}
                    width={12}
                    height={16}
                    alt="Delete icon"
                  ></Image>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button 
        variant='addNewItem'
        className="mt-[1.5rem] w-full"
        onClick={createItem}
      >
        + Add New Item
      </Button>
    </>
  );
}

export { ItemList }