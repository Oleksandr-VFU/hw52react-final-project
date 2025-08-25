import type { ChangeEvent } from "react"

interface SelectFieldProps {
    id: string
    value: string
    label: string
    required?: boolean
    options: { value: string; text: string }[]
    onChangeSelect?: (e: ChangeEvent<HTMLSelectElement>) => void
}

const SelectField = ({ id, value, label, required=true, options, onChangeSelect }: SelectFieldProps) => {
    const DEFAULT_OPTION = { value: '', text: `Оберіть необхідну категорію ${label}...` }
  return (
        <div className="form-group">
            <label className="form-label" htmlFor={id}>{label}</label>
            <select className="form-control" id={id} value={value} onChange={onChangeSelect} required={required}>
              <option value={DEFAULT_OPTION.value}>{DEFAULT_OPTION.text}</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>{option.text}</option>
              ))}
            </select>
        </div>
  )
}

export default SelectField