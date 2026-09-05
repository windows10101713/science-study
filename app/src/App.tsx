import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LearningSetupPage from './pages/LearningSetupPage'
import ConceptPage from './pages/ConceptPage'
import QuizPage from './pages/QuizPage'
import ResultPage from './pages/ResultPage'
import ReviewPage from './pages/ReviewPage'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/setup" element={<LearningSetupPage />} />
          <Route path="/concept/:lessonId" element={<ConceptPage />} />
          <Route path="/quiz/:lessonId" element={<QuizPage />} />
          <Route path="/result/:lessonId" element={<ResultPage />} />
          <Route path="/review" element={<ReviewPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
