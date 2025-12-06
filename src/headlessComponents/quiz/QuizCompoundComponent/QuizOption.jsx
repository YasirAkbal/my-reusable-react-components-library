import React from "react";
import { QuizContext } from "./Quiz";
import { QuizQuestionSectionContext } from "./QuizQuestionSection";

export default function QuizOption({ children, optionId }) {
    const { 
        isFinished, 
        selectAnOption, 
        isSelectedOptionCorrect, 
        isQuestionAnswered,
        isOptionSelected } = React.useContext(QuizContext)

    const { questionId } = React.useContext(QuizQuestionSectionContext);
    
    if (typeof children !== "function") {
        console.error("Quiz.Option expects a function as children");
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