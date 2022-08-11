import React, {ChangeEvent, useState} from "react"
import Greeting from "./Greeting"
import {UserType} from "./HW3"

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<string>("");

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
        error && setError("");
    };

    const addUser = () => {
        // check invalid input
        const trimmedName = name.trim();
        if (trimmedName) {
            alert(`Hello ${name}!`);
            setName("");
            addUserCallback(trimmedName);
        } else {
            setError("Please, enter a valid name");
            setName("");
        }
    };

    const addUserOnKey = (e: {key: string}) => e.key === "Enter" && addUser();

    const totalUsers: number = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            addUserOnKey={addUserOnKey}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
