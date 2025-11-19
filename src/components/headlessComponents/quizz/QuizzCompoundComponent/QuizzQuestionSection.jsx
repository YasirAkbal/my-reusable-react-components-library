import React from "react";

const QuizzQuestionSectionContext = React.createContext();

export default function QuizzQuestionSection({ children, questionId }) {
    return (
        <QuizzQuestionSectionContext.Provider value={{ questionId }}>
            {children} 
        </QuizzQuestionSectionContext.Provider>
    )
}   

export { QuizzQuestionSectionContext };