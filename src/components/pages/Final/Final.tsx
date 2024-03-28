import { useQuizContext } from '~/providers/QuizContext'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './Final.module.scss'
import { Button } from '~/components/atoms/Button'
import { useEffect } from 'react'

const pageMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
}

function Final() {
  const navigate = useNavigate()
  const { quizzes } = useQuizContext()

  const sendFakePost = async () => {
    try {
      // INFO fake fetch, wont work
      await fetch('https://placeholder-fake.com', {
        method: 'POST',
        body: JSON.stringify(quizzes),
      })
    } catch (e) {
      console.log('👍 Error sending fake POST')
    }
  }

  useEffect(() => {
    console.log('🚀 Results')
    console.table(quizzes)

    sendFakePost()
  }, [quizzes])

  const handleGoHome = () => {
    navigate(`/`)
  }

  return (
    <>
      <div className={styles.container}>
        <motion.section
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageMotion}
          className={styles.final}
        >
          <img className={styles.logo} src="/logo.png" alt="Logo Max Mara" />
          <p className={styles.title}>THANKS SO MUCH FOR PLAYING!</p>
          <p className={styles.subtitle}>
            Want to try on your Icon Coat? <br />
            Please ask a client advisor for assistance
          </p>
          <div className={styles.footer}>
            <Button ariaLabel="Go to home" onClick={handleGoHome}>
              RETURN TO HOME
            </Button>
          </div>
        </motion.section>
      </div>
    </>
  )
}

export default Final
