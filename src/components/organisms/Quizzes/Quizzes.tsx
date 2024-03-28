import React from 'react'
import { useQuizContext } from '~/providers/QuizContext'
import { Options } from '~/components/molecules/Options'
import { Quiz } from '~/types/Quiz'
import styles from './Quizzes.module.scss'

type QuizzesProps = {
  quiz: Quiz 
}

const Quizzes: React.FC<QuizzesProps> = React.memo(({ quiz }) => {
  const { updateQuiz } = useQuizContext()

  const handleSelect = (index: number) => {
    updateQuiz({ ...quiz!, answer: index })
  }

  return (
    <>
      <p className={styles.title} dangerouslySetInnerHTML={{__html: quiz?.question}} />
      {quiz?.options && (
        <Options active={quiz.answer} values={quiz.options} onSelect={handleSelect} />
      )}
    </>
  )
})

export default Quizzes
