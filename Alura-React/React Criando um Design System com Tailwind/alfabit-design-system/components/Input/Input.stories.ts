import { Meta, StoryObj } from "@storybook/react"

import Input, { InputProps } from "./Input"

const meta: Meta<InputProps> = {
  title: 'Molecules/Input',
  component: Input,
  argTypes: {
    label: {
      type: 'string'
    },
    disabled: {
      type: 'boolean'
    },
    className: {
      type: 'string'
    }
  }
}

export default meta

export const Primary: StoryObj<InputProps> = {
  args: {
    label: 'Input'
  }
}

export const NoLabel: StoryObj<InputProps> = {
  args: {}
}

export const Multiline: StoryObj<InputProps> = {
  args: {
    label: 'Multiline',
    multiline: true
  }
}

export const Disabled: StoryObj<InputProps> = {
  args: {
    label: 'Input Disabled',
    disabled: true
  }
}

export const MultilineDisabled: StoryObj<InputProps> = {
  args: {
    label: 'Multiline Input Disabled',
    multiline: true,
    disabled: true
  }
}
