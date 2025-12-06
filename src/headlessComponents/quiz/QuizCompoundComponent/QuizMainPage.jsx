import React from "react";
import { QuizContext } from "./Quiz";

export default function QuizMainPage({ children }) {
    const { isStarted } = React.useContext(QuizContext);
    
    return (
        <>
            {isStarted && children}
        </>
    )
}