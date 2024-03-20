import type { Meta, StoryObj } from '@storybook/react';
import { InvoiceItem } from './Item';

const meta = {
  title: 'Components/Invoice/Item',
  component: InvoiceItem,
  argTypes: {
    status: {
      control: {
        type: 'select',
        options: ['pending', 'paid', 'draft']
      }
    }
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: 'A input component with light/dark mode.',
      }
    }
  },
} satisfies Meta<typeof InvoiceItem>;

export default meta;
type Story = StoryObj<typeof InvoiceItem>;

export const Item: Story = {
  args: {
    identifier: 'RT3080',
    data: 'Due  19 Aug 2021',
    client: 'Jensen Huang',
    total: '£ 1,800.90',
    status: 'paid'
  }
};
