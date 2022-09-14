import { TriviaQuestion } from "./TriviaQuestion"

export const TriviaQuestions = ({questions}) => {
    return (
        <div className="question-list">
            {questions.map((question) => <TriviaQuestion question={question} key={question.question}/> )}
        </div>
    )

}