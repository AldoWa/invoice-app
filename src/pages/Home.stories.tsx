import type { Meta, StoryObj } from '@storybook/react';
import Home from '.';
import { Navbar } from '@/components/Navbar';

const meta = {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A select component with light/dark mode.',
      }
    }
  },
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof Home>;

export const Principal: Story = {
  render: () => <div className='flex flex-col lg:flex-row'>
    <Navbar />
    <Home></Home>
  </div>
};
