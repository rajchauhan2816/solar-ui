import { Form, Input } from "antd"
import { FilterConfig } from "./types"

interface Props {
    filter: FilterConfig
}

const SingleTextInputFilter = ({ filter }: Props) => {
    return (
        <Form.Item label={filter.label} name={filter.id} key={filter.id}>
            <Input placeholder={filter.placeholder} />
        </Form.Item>
    )
}

export default SingleTextInputFilter
