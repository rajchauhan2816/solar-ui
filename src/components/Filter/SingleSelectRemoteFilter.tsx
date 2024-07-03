import { Form, Select, Spin } from "antd"
import { debounce } from "lodash"
import { useState } from "react"
import { FilterConfig, SelectOption } from "./types"
import { Flex } from "antd"

interface Props {
    filter: FilterConfig
}

const SingleSelectRemoteFilter = ({ filter }: Props) => {
    const [options, setOptions] = useState<Array<SelectOption>>([])
    const [loading, setLoading] = useState(false)

    const handleSearch = async (search: string) => {
        if (!filter.remoteOptions) {
            return
        }

        try {
            setLoading(true)
            const choices = await filter.remoteOptions!(search)
            setOptions(choices)
        } catch (error) {
        } finally {
            setLoading(false)
        }
    }

    return (
        <Form.Item label={filter.label} name={filter.id} key={filter.id}>
            <Select
                mode={filter.extraProps?.mode}
                showSearch
                options={options}
                placeholder={filter.placeholder}
                onSearch={debounce(handleSearch, 300)}
                loading={loading}
                notFoundContent={
                    loading && (
                        <Flex justify={"center"} align={"center"}>
                            <Spin />
                        </Flex>
                    )
                }
                allowClear
            />
        </Form.Item>
    )
}

export default SingleSelectRemoteFilter
