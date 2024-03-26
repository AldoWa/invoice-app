import type { Meta, StoryObj } from '@storybook/react';

import { BillFrom } from '../BillFrom';

const meta = {
  title: 'Components/Form',
  component: BillFrom,
  parameters: {
    theme: 'dark',
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: 'Bill From Component',
      }
    }
  },
} satisfies Meta<typeof BillFrom>;

export default meta;
type Story = StoryObj<typeof BillFrom>;

export const BillFromForm: Story = {
  render: () => <div className='container mx-auto max-w-[504px]'>
    <BillFrom />
  </div>
};
