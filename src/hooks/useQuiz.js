import { useState } from "react"

const OPTION_IS_NOT_SELECTED = -1
const QUIZ_PHASES = {
    NOT_STARTED: "NOT_STARTED",
    STARTED: "STARTED",
    FINISHED: "FINISHED"
}

export default function useQuiz(questions) {
    const [selectedOptions, setSelectedOptions] = useState(() => createSelectedOptionsInitialState())
    const [quizPhase, setQuizPhase] = useState(QUIZ_PHASES.NOT_STARTED)
    const questionsCount = questions.length
    const isStarted = quizPhase !== QUIZ_PHASES.NOT_STARTED
    const isFinished = quizPhase === QUIZ_PHASES.FINISHED

    function createSelectedOptionsInitialState() {
        return questions.map(question => {
            return {questionId: question.id, selectedOptionId: OPTION_IS_NOT_SELECTED}
        })
    }

    function resetSelectedOptions() {
        setSelectedOptions(createSelectedOptionsInitialState())
    }

    function selectAnOption(questionId, optionId) {
        if (isFinished) return;

        setSelectedOptions(selectedOptions => {
            return selectedOptions.map(item => {
                return item.questionId === questionId ? { ...item, selectedOptionId: optionId } : item
            });
        });
    }

    function getSelectedOption(questionId) {
        return selectedOptions.find(item => item.questionId === questionId)
    }

    function isOptionSelected(questionId, optionId) {
        const selected = getSelectedOption(questionId)
        return Boolean(selected && selected.selectedOptionId === optionId)
    }

    function isSelectedOptionCorrect(questionId, optionId) {
        return questions.find(q => q.id === questionId).correctOptionId === optionId
    }

    function isQuestionAnswered(questionId) {
        const selected = getSelectedOption(questionId)
        return Boolean(selected) && selected.selectedOptionId !== OPTION_IS_NOT_SELECTED
    }

    function areAllQuestionsAnswered() {
        return selectedOptions.every(option => option.selectedOptionId !== OPTION_IS_NOT_SELECTED)
    }

    function canFinishQuiz() {
        return areAllQuestionsAnswered() && !isFinished
    }

    function getAnsweredQuestionsCount() {
        return selectedOptions.filter(ques => isQuestionAnswered(ques.questionId)).length
    }

    function getCorrectAnswersCount() { 
        return questions.reduce(((count, question) => {
            const selected = selectedOptions.find(item => item.questionId === question.id)
            return count + (selected.selectedOptionId === question.correctOptionId ? 1 : 0)
        }), 0)
    }

    function getWrongAnswersCount() { 
        return questions.length - getCorrectAnswersCount()
    }

    function calculateScore() {
        const correctAnswersCount = getCorrectAnswersCount()
        return (correctAnswersCount / questions.length) * 100
    }

    function startQuiz() {
        setQuizPhase(QUIZ_PHASES.STARTED)
    }

    function finishQuiz() {
        setQuizPhase(QUIZ_PHASES.FINISHED)
    }

    function restartQuiz() {
        resetSelectedOptions();
        setQuizPhase(QUIZ_PHASES.STARTED)
    }   

    return {
        isStarted,
        isFinished,
        questionsCount,
        selectAnOption,
        getCorrectAnswersCount,
        getWrongAnswersCount,
        getAnsweredQuestionsCount,
        calculateScore,
        startQuiz,
        finishQuiz,
        restartQuiz,
        isSelectedOptionCorrect,
        isQuestionAnswered,
        areAllQuestionsAnswered,
        canFinishQuiz,
        isOptionSelected,
        questions,
        selectedOptions
    }
}