import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: 'A button component with variants.',
      }
    }
  },
  tags: ['autodocs'],
  
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button>Mark as paid</Button>
};

export const Edit: Story = {
  render: () => <Button variant='edit'>Edit</Button>
};

export const Draft: Story = {
  render: () => <Button variant='draft'>Save as Draft</Button>
};

export const Delete: Story = {
  render: () => <Button variant='delete'>Delete</Button>
};

export const AddNewItem: Story = {
  render: () => <Button variant='addNewItem'>+ Add New Item</Button>
};