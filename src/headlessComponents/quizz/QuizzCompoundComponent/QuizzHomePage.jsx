import React from "react";
import { QuizzContext } from "./Quizz";

export default function QuizzHomePage({ children }) {
    const { isStarted } = React.useContext(QuizzContext);

    return (
        <>
            {!isStarted && children}
        </>
    )
}