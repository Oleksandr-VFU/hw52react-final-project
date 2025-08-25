import { ChangeEvent } from "react"


interface InputFieldProps {
    id: string
    type?: string
    value: string | number
    label: string
    placeholder: string
    required?: boolean
    textArea?: boolean
    onChangeInput?: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeTextArea?: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const InputField = ({ id, type="text", value, label, placeholder, required=true, textArea=false, onChangeInput, onChangeTextArea }: InputFieldProps) => {
  return (
    <div className="form-group">
        <label className="form-label" htmlFor={id}>{label}</label>
        {textArea ? (
            <textarea className="form-control" id={id} value={value} onChange={onChangeTextArea} placeholder={placeholder} required={required}/>
        ) : (
            <input className="form-control" type={type} id={id} value={value} onChange={onChangeInput} placeholder={placeholder} required={required}/>
        )}
    </div>
  )
}

export default InputField