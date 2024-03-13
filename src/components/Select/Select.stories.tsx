import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '.';

const meta = {
  title: 'Components/Inputs/Select',
  component: Select,
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: 'A select component with light/dark mode.',
      }
    }
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const ReactSelect: Story = {
  render: () => <Select options={[{
    value: 1,
    label: 'Net 1 Day'
  }, {
    value: 7,
    label: 'Net 7 Days'
  }]}/>
};
