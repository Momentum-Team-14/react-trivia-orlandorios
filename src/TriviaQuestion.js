import { htmlDecode } from "./utilities"

export const TriviaQuestion = ({question}) => {
    return (
        <div>{htmlDecode(question.question)}</div>
    )

}