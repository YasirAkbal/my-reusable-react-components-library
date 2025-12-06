import React from "react";
import { QuizContext } from "./Quiz";

export default function QuizStartButton({ children }) {
    const { startQuiz } = React.useContext(QuizContext);

    if (typeof children !== "function") {
        console.error("Quiz.StartButton expects a function as children");
        return null;
    }

    return children({ startQuiz })
}