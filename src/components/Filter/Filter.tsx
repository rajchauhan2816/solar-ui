import { Button, Drawer, Form, Space, Typography } from 'antd'
import { useEffect } from 'react'
import DateFilter from './DateFilter'
import DateRangeFilter from './DateRangeFilter'
import SingleSelectFilter from './SingleSelectFilter'
import SingleSelectRemoteFilter from './SingleSelectRemoteFilter'
import SingleTextInputFilter from './SingleTextInputFilter'
import { FilterConfig, FilterProps } from './types'

/**
 * Filter Component
 *
 * The Filter component is a reusable drawer form that allows users to apply various filters.
 * It dynamically renders different types of input fields based on the filter configuration provided.
 *
 * @param {FilterProps} props - The properties passed to the Filter component.
 */
export const Filter = (props: FilterProps) => {
  const [form] = Form.useForm()
  const { filters, filtersCallback, open, setOpen } = props

  // Initialize form values based on filter configurations
  const initialValues = filters.reduce((acc: any, filter: FilterConfig) => {
    return { ...acc, [filter.id]: filter.initialValue }
  }, {})

  useEffect(() => {
    if (initialValues) {
      filtersCallback(initialValues)
    }
  }, [JSON.stringify(initialValues)])

  /**
   * Handle form submission
   *
   * @param {any} values - The form values.
   */
  const handleFilterSubmit = (values: any) => {
    console.log('values', values)

    filtersCallback(values)
    setOpen(false)
  }

  /**
   * Handle clearing of filters
   */
  const handleClearFilters = () => {
    form.resetFields()
    filtersCallback({})
    setOpen(false)
  }

  /**
   * Handle closing of the drawer
   */
  const onClose = () => {
    setOpen(false)
  }

  /**
   * Render filter based on filter configuration type
   *
   * @param {FilterConfig} filter - The filter configuration.
   * @returns {JSX.Element} - The corresponding filter component.
   */
  const renderFilterField = (filter: FilterConfig): JSX.Element => {
    switch (filter.type) {
      case 'SELECT':
        return <SingleSelectFilter key={filter.id} filter={filter} />
      case 'SELECT-REMOTE':
        return <SingleSelectRemoteFilter key={filter.id} filter={filter} />
      case 'TEXT-INPUT':
        return <SingleTextInputFilter key={filter.id} filter={filter} />
      case 'DATE':
        return <DateFilter key={filter.id} filter={filter} />
      case 'DATE-RANGE':
        return <DateRangeFilter key={filter.id} filter={filter} />
      default:
        return <Typography.Text style={{ color: 'red' }}>filter not configured for {filter.type}</Typography.Text>
    }
  }

  return (
    <Drawer title="Apply Filters" onClose={onClose} open={open}>
      <Form layout={'vertical'} form={form} initialValues={initialValues} onFinish={handleFilterSubmit}>
        {filters.map((filter: FilterConfig) => renderFilterField(filter))}
        <Space.Compact block>
          <Button htmlType="submit" type="primary" style={{ width: '100%' }}>
            Apply
          </Button>
          <Button type="primary" onClick={handleClearFilters} ghost style={{ width: '100%' }}>
            Clear
          </Button>
        </Space.Compact>
      </Form>
    </Drawer>
  )
}

export default Filter
