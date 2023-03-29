import { Control, FieldValues } from 'react-hook-form'

export interface ComponentFormInputInteface {
  name: string
  label: string
  placeholder: string
  type: string
  size?: string
  weight?: 300 | 500 | 700 | 800 | number
  color?: string
  className?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any
  error?: ComponentFormInputErrorInteface
  mask?:
    | 'maskCPF'
    | 'maskCurrencyBRL'
    | 'maskDateBRL'
    | 'maskPostalCode'
    | 'maskPhone'
    | 'maskMobile'
}

export interface ComponentFormSelectOptionsInterface {
  value: string | number
  label: string
}
export interface ComponentFormSelectInteface {
  name: string
  label: string
  placeholder: string
  isSearchable: boolean
  options: ComponentFormSelectOptionsInterface[]
  defaultValue?: ComponentFormSelectOptionsInterface
  // eslint-disable-next-line @typescript-eslint/ban-types
  control: Control<FieldValues, object>
  error?: ComponentFormInputErrorInteface
}

export interface ComponentFormInputErrorInteface {
  message: string
}

export interface ModuleCalculatorImageIcon {
  url: string
}

export interface ModuleCalculatorTag {
  title: string
}

export interface BlockCountsTypeProps {
  blockCounts: BlockCountsItemTypeProps[]
}

export interface BlockCountsItemTypeProps {
  title: string
  description: string
  count_view?: number
  image_file: string
  image_path?: string
  image_size: number
  isStatistics: boolean
}

export interface Props {
  country: string
  fifa_code: string
  flag_image: string
  group: string
  squad?: SquadProps[]
}

export interface SquadProps {
  _id: string
  code?: string
  isEspecial: boolean
  isLegend: boolean
  count: number
}
