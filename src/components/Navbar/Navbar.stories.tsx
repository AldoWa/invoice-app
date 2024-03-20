import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '.';

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    backgrounds: { default: 'dark' },
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Navbar component.',
      }
    }
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  render: () => <div className='min-h-screen'><Navbar /></div>
};
