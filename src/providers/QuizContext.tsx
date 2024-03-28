import { createContext, useState, useContext, FC, ReactNode } from 'react'
import { Quiz } from '~/types/Quiz'
import initialData from '~/data/quizzes.json'

interface QuizContextState {
  quizzes: Quiz[]
  updateQuiz: (quiz: Quiz) => void
}

const QuizContext = createContext<QuizContextState | undefined>(undefined)

export const QuizProvider: FC<{
  children: ReactNode
}> = ({ children }) => {
  const [quizzes, setQuizzes] = useState<Quiz[]>(initialData)

  const updateQuiz = (quiz: Quiz) => {
    setQuizzes((prev) => {
      const newQuizzes = [...prev]
      const index = newQuizzes.findIndex(({ id }) => id === quiz.id)
      newQuizzes[index] = quiz
      return newQuizzes
    })
  }

  const contextValue: QuizContextState = {
    quizzes,
    updateQuiz,
  }

  return (
    <QuizContext.Provider value={contextValue}>{children}</QuizContext.Provider>
  )
}

export const useQuizContext = (): QuizContextState => {
  const context = useContext(QuizContext)
  if (!context) {
    throw new Error('useQuizContext must be used within a QuizProvider')
  }
  return context
}
