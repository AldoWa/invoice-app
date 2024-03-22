import type { Meta, StoryObj } from '@storybook/react';
import { Form  } from '.';

const meta = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    theme: 'dark',
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: 'Form component.',
      }
    }
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof Form>;

export const Principal: Story = {
  render: () => <div className='container mx-auto max-w-[504px]'>
    <Form />
  </div>
};
