import type { Meta, StoryObj } from '@storybook/react';
import { DateComponent } from '.';

const meta = {
  title: 'Components/Inputs/DatePicker',
  component: DateComponent,
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: 'A select component with light/dark mode.',
      }
    }
  },
} satisfies Meta<typeof DateComponent>;

export default meta;
type Story = StoryObj<typeof DateComponent>;

export const Date: Story = {
  render: () => <DateComponent />
};
