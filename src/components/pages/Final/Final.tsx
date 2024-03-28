import { useEffect } from 'react'
import { useQuizContext } from '~/providers/QuizContext'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '~/components/atoms/Button'
import styles from './Final.module.scss'

const pageMotion = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0 },
}

const containerPageMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
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
      <motion.section
        animate="animate"
        exit="exit"
        className={styles.container}
        variants={containerPageMotion}
        transition={{
          duration: 0.2,
        }}
      >
        <motion.section
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageMotion}
          className={styles.final}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
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
      </motion.section>
    </>
  )
}

export default Final
