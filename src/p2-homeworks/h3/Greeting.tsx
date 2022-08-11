import React, {ChangeEvent} from "react"
import s from "./Greeting.module.css"

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    addUserOnKey: (e: {key: string}) => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, addUserOnKey} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error_input + ' ' + s.input : s.input;

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyDown={addUserOnKey}
                   autoFocus={true}/>
            <button className={s.add_user_button} onClick={addUser}>add</button>
            <span className={s.total_users}>{totalUsers}</span>
            <div className={s.error_message}>{error}</div>
        </div>
    )
}

export default Greeting
