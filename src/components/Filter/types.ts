export type FilterConfigType = "TEXT-INPUT" | "SELECT" | "DATE" | "DATE-RANGE" | "SELECT-REMOTE"

export interface SelectOption {
    label: string
    value: string
}

interface ExtraProps {
    showTime?: boolean
    mode?: "tags" | "multiple" | undefined
}
export interface FilterConfig {
    id: string
    label: string
    placeholder: string
    type: FilterConfigType
    initialValue?: any
    options?: Array<SelectOption>
    remoteOptions?: (search: string) => Promise<SelectOption[]>
    extraProps?: ExtraProps
}

export interface FilterProps {
    filters: Array<FilterConfig>
    filtersCallback: any
    open: boolean
    setOpen: (open: boolean) => void
}
