import { Form, Select } from "antd"
import { FilterConfig } from "./types"

interface Props {
    filter: FilterConfig
}

const SingleSelectFilter = ({ filter }: Props) => {
    return (
        <Form.Item label={filter.label} name={filter.id} key={filter.id}>
            <Select
                mode={filter.extraProps?.mode}
                options={filter.options}
                placeholder={filter.placeholder}
                allowClear
            />
        </Form.Item>
    )
}

export default SingleSelectFilter
