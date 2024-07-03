import { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Filter } from './Filter'
import { FilterProps } from './types'

const meta: Meta<FilterProps> = {
  title: 'Example/Filter',
  component: Filter,
  tags: ['autodocs'],
  argTypes: {
    filters: { control: 'array' },
    filtersCallback: { action: 'filtersCallback' },
    open: { control: 'boolean' },
    setOpen: { action: 'setOpen' },
  },
}

export default meta

const Template: StoryFn<FilterProps> = (args) => {
  const [open, setOpen] = useState(args.open)

  return <Filter {...args} open={open} setOpen={setOpen} />
}

export const Default = Template.bind({})
Default.args = {
  filters: [
    {
      id: 'email',
      label: 'Email or Name',
      placeholder: 'Enter Email or Name',
      type: 'TEXT-INPUT',
    },
    {
      id: 'status',
      label: 'Status',
      placeholder: 'Select Status',
      type: 'SELECT',
      options: [
        { label: 'Pending', value: 'PENDING' },
        { label: 'Done', value: 'DONE' },
      ],
    },
    {
      id: 'user_email',
      label: 'User Email',
      placeholder: 'Search Email',
      type: 'SELECT-REMOTE',
      remoteOptions: async (search: string) => {
        console.log('search', search)
        // Mocked response
        return [
          { label: 'user1@example.com', value: 'user1@example.com' },
          { label: 'user2@example.com', value: 'user2@example.com' },
        ]
      },
    },
    {
      id: 'date',
      label: 'Date',
      placeholder: 'Select Date',
      type: 'DATE',
    },
    {
      id: 'date_range',
      label: 'Date Range',
      placeholder: 'Select Date Range',
      type: 'DATE-RANGE',
    },
  ],
  open: true,
  filtersCallback: (values: any) => {
    console.log('Filters applied:', values)
  },
}
