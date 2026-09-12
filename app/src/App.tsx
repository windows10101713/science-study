import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LearningSetupPage from './pages/LearningSetupPage'
import ConceptPage from './pages/ConceptPage'
import QuizPage from './pages/QuizPage'
import ResultPage from './pages/ResultPage'
import ReviewPage from './pages/ReviewPage'
import DashboardPage from './pages/DashboardPage'
import DetailedReviewPage from './pages/DetailedReviewPage'
import { useLearningStore } from './lib/store'

function App() {
  const { userPreferences } = useLearningStore()

  return (
    <Router>
      <div className={`app ${userPreferences.darkMode ? 'dark-mode' : ''}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/setup" element={<LearningSetupPage />} />
          <Route path="/concept/:lessonId" element={<ConceptPage />} />
          <Route path="/quiz/:lessonId" element={<QuizPage />} />
          <Route path="/result/:lessonId" element={<ResultPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/review/detailed" element={<DetailedReviewPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
