import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';

const meta = {
  title: 'Components/Inputs/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: 'A input component with light/dark mode.',
      }
    }
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  render: () => <Input defaultValue={'Storybook'}/>
};
