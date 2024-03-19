import {  components, MultiValueGenericProps, MultiValueRemoveProps, NoticeProps } from "react-select";
import  {Select} from '../Select'; 

const NoOptionsMessage = (props: NoticeProps) => {
  return (
    <div className="dark:bg-invoice-04 dark:text-white p-4">
      <components.NoOptionsMessage {...props} />
    </div>
  );
  
};

const MultiValueContainer = (props: MultiValueGenericProps) => {
  return (
    <div className="p-1 px-2 border border-invoice-01 rounded-md">
      <components.MultiValueContainer {...props} />
    </div>
  )
}

const MultiValueRemove = (props: MultiValueRemoveProps) => {
  return (
    <div className="bg-invoice-01 text-white ml-1">
      <components.MultiValueRemove {...props} />
    </div>
  )
}

function Filter() {
  return (
    <Select
      isMulti={true}
      components={{ NoOptionsMessage, MultiValueContainer, MultiValueRemove }}
      placeholder="Filter by status"
      options={[
        {
          value: 'pending',
          label: 'Pending',
        },
        {
          value: 'draft',
          label: 'Draft'
        },
        {
          value: 'paid',
          label: 'Paid'
        }
      ] 
      }
    >
    </Select>
  )
}

export { Filter };

