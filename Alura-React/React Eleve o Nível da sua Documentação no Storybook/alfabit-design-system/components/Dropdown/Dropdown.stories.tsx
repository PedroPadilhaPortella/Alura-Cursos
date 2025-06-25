import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Dropdown, { type DropdownProps } from './Dropdown';

const meta: Meta<DropdownProps> = {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  decorators: [
    (Story) => (
      <div style={{ paddingBottom: "15em", paddingTop: "3em" }}>
        <Story />
      </div>
    )
  ]
}

export default meta;
type Story = StoryObj<DropdownProps>

export const Primary: Story = {
  args: {
    list: [],
  },
};

export const Common: Story = {
  args: {
    list: [
      "Brasil",
      "Espanha",
      "Argentina",
      "México",
      "Alemanha",
      "Portugal",
    ],
  },
};