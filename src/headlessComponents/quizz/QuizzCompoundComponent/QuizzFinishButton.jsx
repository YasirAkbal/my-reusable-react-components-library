import React from "react";
import { QuizzContext } from "./Quizz";

export default function QuizzFinishButton({ children }) {
    const {isFinished, finishQuiz} = React.useContext(QuizzContext);

    if (typeof children !== "function") {
        console.error("Quizz.FinishButton expects a function as children");
        return null;
    }

    return children({isFinished, finishQuiz})
}
