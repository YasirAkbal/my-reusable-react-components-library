import React from "react";
import { QuizzContext } from "./Quizz";

export default function QuizzStartButton({ children }) {
    const { startQuiz } = React.useContext(QuizzContext);

    if (typeof children !== "function") {
        console.error("Quizz.StartButton expects a function as children");
        return null;
    }

    return children({ startQuiz })
}