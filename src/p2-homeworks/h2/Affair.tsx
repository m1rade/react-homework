import React from "react"
import { AffairType } from "./HW2"
import s from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType;
    deleteAffairCallback: (id: number) => void;
};

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id);

    const priorityClass = s.priority + ' ' + s[props.affair.priority];

    return (
      <div>
        <span className={s.affair}>{props.affair.name}</span>
        <span className={priorityClass}>{props.affair.priority}</span>
        <button onClick={deleteCallback}>Delete</button>
      </div>
    );
}

export default Affair;
