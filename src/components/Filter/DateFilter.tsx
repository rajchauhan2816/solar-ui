import { DatePicker, Form } from "antd"
import { FilterConfig } from "./types"

interface Props {
    filter: FilterConfig
}

const DateFilter = ({ filter }: Props) => {
    return (
        <Form.Item label={filter.label} name={filter.id} key={filter.id}>
            <DatePicker style={{ width: "100%" }} showTime={filter.extraProps?.showTime} />
        </Form.Item>
    )
}

export default DateFilter
