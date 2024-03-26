import type { Meta, StoryObj } from '@storybook/react';
import { ItemList as ItemListComponent } from '../ItemList';

const meta = {
  title: 'Components/Form',
  component: ItemListComponent,
  parameters: {
    theme: 'dark',
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: 'Item List form.',
      }
    }
  },
} satisfies Meta<typeof ItemListComponent>;

export default meta;
type Story = StoryObj<typeof ItemListComponent>;

export const ItemList: Story = {
  render: () => <div className='container mx-auto max-w-[504px]'>
    <ItemListComponent />
  </div>
};
