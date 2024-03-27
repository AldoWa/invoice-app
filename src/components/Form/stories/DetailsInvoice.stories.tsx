import type { Meta, StoryObj } from '@storybook/react';

import { DetailsInvoice } from '../DetailsInvoice';

const meta = {
  title: 'Components/Form',
  component: DetailsInvoice,
  parameters: {
    theme: 'dark',
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: 'Bill To Component',
      }
    }
  },
} satisfies Meta<typeof DetailsInvoice>;

export default meta;
type Story = StoryObj<typeof DetailsInvoice>;

export const DetailsInvoices: Story = {
  render: () => <div className='container mx-auto max-w-[504px]'>
    <DetailsInvoice />
  </div>
};
