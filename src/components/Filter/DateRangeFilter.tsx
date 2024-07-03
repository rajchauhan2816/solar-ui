import { DatePicker, Form } from "antd"
import { FilterConfig } from "./types"

const { RangePicker } = DatePicker

interface Props {
    filter: FilterConfig
}

const DateRangeFilter = ({ filter }: Props) => {
    return (
        <Form.Item label={filter.label} name={filter.id} key={filter.id}>
            <RangePicker style={{ width: "100%" }} showTime={filter.extraProps?.showTime} />
        </Form.Item>
    )
}

export default DateRangeFilter
