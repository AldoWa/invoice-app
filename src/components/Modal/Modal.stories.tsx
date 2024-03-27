import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '.';
import { Navbar } from '../Navbar';

import { fn } from '@storybook/test';
import { Form } from '../Form';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    activeModal: {
      control: {
        type: 'boolean'
      },
      defaultValue: false
    }
  },
  parameters: {
    backgrounds: { default: 'light' },
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Modal component.',
      }
    }
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

export const Principal: Story = {
  args: {
    activeModal: false,
    closeModal: fn()
  },
  render: (props) => {
    return (
      <div>
        <Navbar />
        <Modal 
          {...props}
        >
          <Form 
            onDiscard={fn()}
          />
        </Modal>
      </div>
    )
  }
};
