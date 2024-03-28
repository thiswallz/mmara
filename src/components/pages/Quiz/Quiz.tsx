import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuizContext } from '~/providers/QuizContext'
import { Button } from '~/components/atoms/Button'
import { Quizzes } from '~/components/organisms/Quizzes'
import { Dots } from '~/components/molecules/Dots'
import { Quiz as QuizType } from '~/types/Quiz'
import styles from './Quiz.module.scss'

const pageMotion = {
  initial: { opacity: 0, x: 10 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -10, transition: { duration: 0.5 } },
}

const Quiz = () => {
  const navigate = useNavigate()
  const params = useParams()
  const quizId = Number(params.quizId)
  const { quizzes } = useQuizContext()
  const [selectedQuiz, setSelectedQuiz] = useState<QuizType | undefined>(
    undefined
  )

  useEffect(() => {
    const quiz = quizzes.find((quiz) => quiz.id === quizId)
    setSelectedQuiz(quiz)
  }, [quizzes, quizId])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const nextQuizId = quizId + 1
    if (quizzes.length < nextQuizId) {
      navigate('/final')
    } else {
      navigate(`/quiz/${nextQuizId}`)
    }
  }

  if (!selectedQuiz) return null

  return (
    <>
      <motion.form
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageMotion}
        className={styles.quiz}
        onSubmit={handleSubmit}
      >
        <img className={styles.logo} src="/logo.png" alt="Logo Max Mara" />
        <Dots values={quizzes.map((quiz) => quiz.id <= quizId)} />
        <Quizzes quiz={selectedQuiz} />
        <div className={styles.footer}>
          <Button
            disabled={selectedQuiz.answer === undefined}
            ariaLabel="Continue"
            type="submit"
          >
            Continue
          </Button>
        </div>
      </motion.form>
    </>
  )
}

export default Quiz
