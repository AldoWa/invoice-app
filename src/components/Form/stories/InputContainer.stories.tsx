import type { Meta, StoryObj } from '@storybook/react';
import {  InputContainer } from '../InputContainer';

import { Input } from '../../Input';

import { DateComponent } from '../../DataPicker';

import { Select } from '../../Select';

const meta = {
  title: 'Components/Form',
  component: InputContainer,
  parameters: {
    theme: 'dark',
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: 'InputContainer component.',
      }
    }
  },
} satisfies Meta<typeof InputContainer>;

export default meta;
type Story = StoryObj<typeof InputContainer>;

export const InputWithLabel: Story = {
  args: {
    label: 'Label',
    id: 'Label'
  },
  render: (props) => <div className='container mx-auto max-w-[504px]'>
    <InputContainer
      {...props}
    >
      <Input id={props.id}/>
    </InputContainer>
  </div>
};

export const DatePickerWithLabel: Story = {
  args: {
    label: 'Label',
    id: 'Label'
  },
  render: (props) => <div className='container mx-auto max-w-[504px]'>
    <InputContainer
      {...props}
    >
      <DateComponent
        onChange={() => {}}
      />
    </InputContainer>
  </div>
};

export const SelectWithLabel: Story = {
  args: {
    label: 'Label',
    id: 'Label'
  },

  render: (props) => <div className='container mx-auto max-w-[504px]'>
    <InputContainer
      {...props}
    >
      <Select 
        id={props.id}
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
        ]}
      />
    </InputContainer>
  </div>
}