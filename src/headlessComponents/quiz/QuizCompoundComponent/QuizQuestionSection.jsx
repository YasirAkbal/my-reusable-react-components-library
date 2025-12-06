import React from "react";

const QuizQuestionSectionContext = React.createContext();

export default function QuizQuestionSection({ children, questionId }) {
    return (
        <QuizQuestionSectionContext.Provider value={{ questionId }}>
            {children} 
        </QuizQuestionSectionContext.Provider>
    )
}   

export { QuizQuestionSectionContext };