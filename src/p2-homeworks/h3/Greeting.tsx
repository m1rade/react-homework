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
    const inputClass = error ? s.error : ""; // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyDown={addUserOnKey}
                   autoFocus={true}/>
            <span className={s.error_message}>{error}</span>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
