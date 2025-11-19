import React from "react";
import { QuizzContext } from "./Quizz"; 

export default function QuizzRestartButton({ children }) {
    const { restartQuiz } = React.useContext(QuizzContext);

    if (typeof children !== "function") {
        console.error("Quizz.RestartButton expects a function as children");
        return null;
    }

    return children({ restartQuiz })
}