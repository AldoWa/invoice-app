import type { Meta, StoryObj } from '@storybook/react';
import { Filter as FilterByStatus} from '.';

const meta = {
  title: 'Components/FilterByStatus',
  component: FilterByStatus,
  parameters: {
    backgrounds: { default: 'dark' },
    layout: 'centered',
    docs: {
      description: {
        component: 'A filter component',
      }
    }
  },
} satisfies Meta<typeof FilterByStatus>;

export default meta;
type Story = StoryObj<typeof FilterByStatus>;

export const Default: Story = {
  render: () => <FilterByStatus onInputChange={() => {}}/>
};
