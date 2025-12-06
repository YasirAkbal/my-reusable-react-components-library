import React from "react";
import { QuizContext } from "./Quiz"; 

export default function QuizRestartButton({ children }) {
    const { restartQuiz } = React.useContext(QuizContext);

    if (typeof children !== "function") {
        console.error("Quiz.RestartButton expects a function as children");
        return null;
    }

    return children({ restartQuiz })
}