import type { Meta, StoryObj } from '@storybook/react';
import { Form  } from '..';

import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    theme: 'dark',
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: 'Principal Form component.',
      }
    }
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof Form>;

export const PrincipalForm: Story = {
  render: () => <div className='container mx-auto max-w-[504px]'>
    <Form 
      onDiscard={fn()}
    />
  </div>
};
