import Resct from "react"
import "./reset.css"

export const Reset = ({ resetBoard }) => {

    return (
        <button className="reset" onClick={resetBoard}>Reset</button>
    )
}