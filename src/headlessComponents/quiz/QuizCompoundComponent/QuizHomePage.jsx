import React from "react";
import { QuizContext } from "./Quiz";

export default function QuizHomePage({ children }) {
    const { isStarted } = React.useContext(QuizContext);

    return (
        <>
            {!isStarted && children}
        </>
    )
}