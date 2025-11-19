import useQuiz from "../../../../hooks/useQuizz"; 
import React from "react";  
import PropTypes from "prop-types";

const QuizzContext = React.createContext(null);

export default function Quiz({ children, questions, onFinish = () => {} }) {
    const quizz = useQuiz(questions);
    
    React.useEffect(() => {
        if (quizz.isFinished) {
            onFinish({
                questions:quizz.questions,
                selectedOptions: quizz.selectedOptions,
                questionsCount: quizz.questionsCount,
                getCorrectAnswersCount: quizz.getCorrectAnswersCount,
                calculateScore: quizz.calculateScore,
                restartQuiz: quizz.restartQuiz,
                areAllQuestionsAnswered: quizz.areAllQuestionsAnswered
            })
        }
    }, [quizz.isFinished])

    return (
        <QuizzContext.Provider value={quizz}>
            {children}
        </QuizzContext.Provider>
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

export { QuizzContext }