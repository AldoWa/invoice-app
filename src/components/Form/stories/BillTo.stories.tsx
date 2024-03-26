import type { Meta, StoryObj } from '@storybook/react';

import { BillTo } from '../BillTo';

const meta = {
  title: 'Components/Form',
  component: BillTo,
  parameters: {
    theme: 'dark',
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: 'Bill To Component',
      }
    }
  },
} satisfies Meta<typeof BillTo>;

export default meta;
type Story = StoryObj<typeof BillTo>;

export const BillToForm: Story = {
  render: () => <div className='container mx-auto max-w-[504px]'>
    <BillTo />
  </div>
};
