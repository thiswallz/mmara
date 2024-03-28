import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '~/components/atoms/Button'
import styles from './Home.module.scss'

const pageMotion = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 10, transition: { duration: 0.5 } },
}

function Home() {
  const navigate = useNavigate()

  const handlePlay = () => {
    navigate(`/quiz/1`)
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageMotion}
      className={styles.home}
    >
      <img className={styles.logo} src="/logo.png" alt="Logo Max Mara" />
      <p className={styles.title}>
        Discover the <br />
        MAX MARA Icon Coat <br />
        that Best Fits Your Style
      </p>
      <img
        className={styles.coats}
        src="/assets/coats.gif"
        alt="Coats Max Mara"
      />
      <p className={styles.title}>
        PLAY FOR A CHANCE TO WIN <br />A MAX MARA ICON COAT
      </p>
      <div className={styles.footer}>
        <Button ariaLabel="Play Now" onClick={handlePlay} special={true}>
          PLAY NOW
        </Button>
      </div>
    </motion.div>
  )
}

export default Home
