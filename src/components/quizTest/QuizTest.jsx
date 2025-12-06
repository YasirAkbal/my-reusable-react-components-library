import React from "react";
import Quiz from "../../headlessComponents/quiz/QuizCompoundComponent";
import "./QuizTest.css";

const sampleQuestions = [
    {
        id: 1,
        question: "What is React?",
        options: [
            { id: "a", text: "A JavaScript library for building user interfaces" },
            { id: "b", text: "A programming language" },
            { id: "c", text: "A database" },
            { id: "d", text: "An operating system" }
        ],
        correctOptionId: "a"
    },
    {
        id: 2,
        question: "What hook is used for side effects in React?",
        options: [
            { id: "a", text: "useState" },
            { id: "b", text: "useEffect" },
            { id: "c", text: "useRef" },
            { id: "d", text: "useMemo" }
        ],
        correctOptionId: "b"
    },
    {
        id: 3,
        question: "What is JSX?",
        options: [
            { id: "a", text: "A CSS framework" },
            { id: "b", text: "A syntax extension for JavaScript" },
            { id: "c", text: "A testing library" },
            { id: "d", text: "A state management tool" }
        ],
        correctOptionId: "b"
    }
];

export default function QuizTest() {
    const handleFinish = (result) => {
        console.log("Quiz finished!", result);
        alert(`Quiz finished! Score: ${result.calculateScore()}%`);
    };

    return (
        <div className="quiz-test-container">
            <h1 className="quiz-test-title">🧪 Quiz Component Test</h1>
            
            <Quiz questions={sampleQuestions} onFinish={handleFinish}>
                <Quiz.HomePage>
                    <div className="quiz-home">
                        <h2>Welcome to the React Quiz!</h2>
                        <p>Test your React knowledge with 3 questions.</p>
                        <Quiz.StartButton>
                            {({ startQuiz }) => (
                                <button className="quiz-btn quiz-btn-start" onClick={startQuiz}>
                                    Start Quiz 🚀
                                </button>
                            )}
                        </Quiz.StartButton>
                    </div>
                </Quiz.HomePage>
           
                <Quiz.MainPage>
                    <div className="quiz-main">
                        {sampleQuestions.map((q) => (
                            <Quiz.QuestionSection key={q.id} questionId={q.id}>
                                <div className="quiz-question-card">
                                    <Quiz.Question>
                                        <h3 className="quiz-question-text">{q.question}</h3>
                                    </Quiz.Question>
                                    
                                    <Quiz.OptionsSection>
                                        <div className="quiz-options">
                                            {q.options.map((option) => (
                                                <Quiz.Option key={option.id} optionId={option.id}>
                                                    {({ 
                                                        isFinished, 
                                                        isSelected, 
                                                        isSelectedOptionCorrect,
                                                        selectAnOption,
                                                        questionId,
                                                        optionId
                                                    }) => {
                                                        let className = "quiz-option";
                                                        
                                                        if (isSelected) {
                                                            className += " selected";
                                                        }
                                                        
                                                        if (isFinished) {
                                                            if (isSelectedOptionCorrect(questionId, optionId)) {
                                                                className += " correct";
                                                            } else if (isSelected) {
                                                                className += " incorrect";
                                                            }
                                                        }

                                                        return (
                                                            <button
                                                                className={className}
                                                                onClick={() => selectAnOption(questionId, optionId)}
                                                                disabled={isFinished}
                                                            >
                                                                <span className="option-letter">{option.id.toUpperCase()}</span>
                                                                <span className="option-text">{option.text}</span>
                                                            </button>
                                                        );
                                                    }}
                                                </Quiz.Option>
                                            ))}
                                        </div>
                                    </Quiz.OptionsSection>
                                </div>
                            </Quiz.QuestionSection>
                        ))}

                        <div className="quiz-actions">
                            <Quiz.FinishButton>
                                {({ isFinished, finishQuiz }) => (
                                    <button 
                                        className="quiz-btn quiz-btn-finish"
                                        onClick={finishQuiz}
                                        disabled={isFinished}
                                    >
                                        {isFinished ? "Quiz Completed ✅" : "Finish Quiz"}
                                    </button>
                                )}
                            </Quiz.FinishButton>

                            <Quiz.RestartButton>
                                {({ restartQuiz }) => (
                                    <button 
                                        className="quiz-btn quiz-btn-restart"
                                        onClick={restartQuiz}
                                    >
                                        Restart Quiz 🔄
                                    </button>
                                )}
                            </Quiz.RestartButton>
                        </div>
                    </div>
                </Quiz.MainPage>
            </Quiz>
        </div>
    );
}
