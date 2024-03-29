import type { Meta, StoryObj } from '@storybook/react';
import { HeaderHome} from './HeaderHome';

const meta = {
  title: 'Components/Header',
  component: HeaderHome,
  args: {
    filterStatus: 'all',
    invoices: 1,
  },
  parameters: {
    theme: 'dark',
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: 'Header component.',
      }
    }
  },
} satisfies Meta<typeof HeaderHome>;

export default meta;
type Story = StoryObj<typeof HeaderHome>;

export const HeaderHomePage: Story = {
  render: (props) => <HeaderHome {...props}/>
};
