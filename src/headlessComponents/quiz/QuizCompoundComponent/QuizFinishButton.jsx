import React from "react";
import { QuizContext } from "./Quiz";

export default function QuizFinishButton({ children }) {
    const {isFinished, finishQuiz} = React.useContext(QuizContext);

    if (typeof children !== "function") {
        console.error("Quiz.FinishButton expects a function as children");
        return null;
    }

    return children({isFinished, finishQuiz})
}
