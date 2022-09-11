import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react"
import s from "./SuperRadio.module.css"

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        className,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
        onChangeOption && onChangeOption(e.currentTarget.value);
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label className={s.label} key={name + "-" + i}>
            <input
                type={"radio"}
                onChange={onChangeCallback}
                name={name}
                value={o}
                checked={o === value}
                className={s.input}
                // name, checked, value, onChange
                {...restProps}
            />
            {o}
        </label>
    )) : []

    const superRadioClassName = `${s.superRadio} ${className ? className : ""}`

    return (
        <div className={superRadioClassName}>
            {mappedOptions}
        </div>
    )
}

export default SuperRadio
