import React from "react";
import { QuizzContext } from "./Quizz";
import { QuizzQuestionSectionContext } from "./QuizzQuestionSection";

export default function QuizzOption({ children, optionId }) {
    const { 
        isFinished, 
        selectAnOption, 
        isSelectedOptionCorrect, 
        isQuestionAnswered,
        isOptionSelected } = React.useContext(QuizzContext)

    const { questionId } = React.useContext(QuizzQuestionSectionContext);
    
    if (typeof children !== "function") {
        console.error("Quizz.Option expects a function as children");
        return null;
    }

    const isSelected = isOptionSelected(questionId, optionId);

    return children({
        isFinished,
        isSelectedOptionCorrect,
        isQuestionAnswered,
        isSelected,
        optionId,
        questionId,
        selectAnOption
    })
}