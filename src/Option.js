import { Button } from "@mui/material"
import { htmlDecode } from "./utilities"


export const Option = ({option, onClick}) => {


    return (
            <>
            <div className="option-list">
            <Button onClick={onClick}>{htmlDecode(option)}</Button>
            </div>
            </>
    )
}