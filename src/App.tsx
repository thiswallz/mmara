import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Home } from '~/components/pages/Home'
import { Final } from '~/components/pages/Final'
import { Quiz } from '~/components/pages/Quiz'
import { QuizProvider } from '~/providers/QuizContext'
import { Main } from './components/templates/Main'

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Main />}>
          <Route index path="/" element={<Home />} />
          <Route path="quiz/:quizId" element={<Quiz />} />
          <Route path="final" element={<Final />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <>
      <QuizProvider>
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </QuizProvider>
    </>
  )
}

export default App
