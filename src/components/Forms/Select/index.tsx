import Text from 'components/Text'
import React from 'react'
import { Controller } from 'react-hook-form'
import Select, {
  CommonProps,
  components,
  GroupTypeBase,
  OptionTypeBase
} from 'react-select'
import { ComponentFormSelectInteface } from 'utils/interface'

const SelectWithSearch: React.FC<ComponentFormSelectInteface> = ({
  name,
  label,
  error,
  placeholder,
  options,
  isSearchable,
  defaultValue,
  control,
  ...rest
}) => {
  const NoOptionsMessage = (
    props: JSX.IntrinsicAttributes &
      CommonProps<OptionTypeBase, boolean, GroupTypeBase<OptionTypeBase>> & {
        children: React.ReactNode
        innerProps: { [key: string]: unknown }
      }
  ) => {
    return (
      <components.NoOptionsMessage {...props}>
        <span>😔 Nenhum registro encontrado! 👎</span>
      </components.NoOptionsMessage>
    )
  }
  return (
    <>
      <div>
        <Text
          label={label}
          color={error ? 'danger' : 'dark'}
          size="small"
          weight={700}
          className=""
        />
        {error && (
          <Text
            label={error ? error.toString() : ''}
            color="danger"
            size="xxsmall"
            weight={300}
            className=""
          />
        )}
      </div>
      <Controller
        {...rest}
        control={control}
        name={name}
        render={({ field }) => (
          <Select
            {...field}
            className="custom-react-select"
            placeholder={placeholder}
            options={options}
            defaultValue={defaultValue}
            components={{ NoOptionsMessage }}
            isSearchable={isSearchable}
            style={{ height: 160 }}
          />
        )}
      />
    </>
  )
}

export default SelectWithSearch
