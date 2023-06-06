

# Official docs

[Generic](https://www.typescriptlang.org/docs/handbook/2/generics.html)

### Easy example:

```ts
function identity<Type>(arg: Type): Type {
	return arg;
}
```

Usage:
- Way 1: Defined `T` type by adding `<string>`
```ts
let output = identity<string>("myString");

// type of output now is string
```
- Way 2: using *_type argument inference_* — that is, we want the compiler to set the value of `Type` for us automatically based on the type of the argument we pass in:  ^4797fa
```ts
let output = identity("myString");
```

### Complex Usage with React Component

- Here is the implement of the component:
```tsx
import {
  Autocomplete,
  AutocompleteRenderInputParams, AutocompleteValue,
  UseAutocompleteProps,
} from '@mui/material'
import { css } from '@emotion/react'
import { useTheme } from '@mui/material/styles'
import { FieldErrors } from 'react-hook-form'
import { FC } from 'react'

interface MemberComboBoxInputProps<T> {
  fieldName: string
  errors: FieldErrors
  options: T[]
  onChange: UseAutocompleteProps<T, undefined, undefined, undefined>['onChange'],
  getOptionLabel: (option: T) => string
  InputComponent: FC<{params: AutocompleteRenderInputParams}>
  defaultValue?: AutocompleteValue<T, undefined, undefined, undefined>
}

function MemberComboBoxInput<T>(props: MemberComboBoxInputProps<T>) {
  const theme = useTheme()
  const {
    fieldName,
    errors,
    options,
    onChange,
    defaultValue,
    getOptionLabel,
    InputComponent
  } = props
  return (
    <Autocomplete
      css={
        css`
          position: relative;
          ::before {
            content: "";
            position: absolute;
            top: 15px;
            right: 20px;
            z-index: 1000;
            width: 12px;
            height: 12px;
            border: 2px solid ${errors[fieldName] ? theme.palette.error.main : theme.palette.text.primary};
            border-top: 2px solid #fff;
            border-right: 2px solid #fff;
            transform: rotate(-45deg);
            transition: 0.5s;
            pointer-events: none;
          }
          &[aria-expanded="true"] {
            ::before {
              top: 22px;
              transform: rotate(-225deg);
            }
          }
          input {
            width: 100%;
            height: 48px;
            border: solid 1px ${errors[fieldName] ? theme.palette.error.main : '#4444444D'};
            border-radius: 5px;
            padding: ${theme.spacing(3)};
            cursor: pointer;
            &:focus-visible {
              outline: none;
            }
          }`
      }
      options={options}
      onChange={onChange}
      defaultValue={defaultValue}
      getOptionLabel={getOptionLabel}
      renderInput={(params) => (
        <InputComponent params={params} />
      )}
    />
  )
}

export default MemberComboBoxInput

```

Usage: 
```tsx
<MemberComboBoxInput
  fieldName="nationalityId"
  errors={errors}
  options={options}
  onChange={(_, item) => {
	onChange(item?.id)
	setValue('nationalityIsoName', item?.isoName || '')
  }}
  defaultValue={defaultNationality}
  getOptionLabel={(option: INationality) => `${option.isoName} ${t(option.isoName, {ns: nsTranGgjCountry})}`}
  InputComponent={AutoCompleteInput}
/>

```

As you can see that the component has props interface:
```tsx
interface MemberComboBoxInputProps<T> {
  fieldName: string
  errors: FieldErrors
  options: T[]
  onChange: UseAutocompleteProps<T, undefined, undefined, undefined>['onChange'],
  getOptionLabel: (option: T) => string
  InputComponent: FC<{params: AutocompleteRenderInputParams}>
  defaultValue?: AutocompleteValue<T, undefined, undefined, undefined>
}
```

With [[#^4797fa|Way 2]] Typescript compiler will automatically set `T` base on the type of props pass into Components. (`options, getOptionLabel, defaultValue, onChange`)