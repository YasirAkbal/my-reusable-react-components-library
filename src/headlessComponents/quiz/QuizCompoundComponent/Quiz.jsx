import useQuiz from "../../../hooks/useQuiz"; 
import React from "react";  
import PropTypes from "prop-types";

const QuizContext = React.createContext(null);

export default function Quiz({ children, questions, onFinish = () => {} }) {
    const quiz = useQuiz(questions);
    
    React.useEffect(() => {
        if (quiz.isFinished) {
            onFinish({
                questions:quiz.questions,
                selectedOptions: quiz.selectedOptions,
                questionsCount: quiz.questionsCount,
                getCorrectAnswersCount: quiz.getCorrectAnswersCount,
                calculateScore: quiz.calculateScore,
                restartQuiz: quiz.restartQuiz,
                areAllQuestionsAnswered: quiz.areAllQuestionsAnswered
            })
        }
    }, [quiz.isFinished])

    return (
        <QuizContext.Provider value={quiz}>
            {children}
        </QuizContext.Provider>
    )
}

Quiz.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    question: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    correctOptionId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  })).isRequired,
  onFinish: PropTypes.func
}

export { QuizContext }