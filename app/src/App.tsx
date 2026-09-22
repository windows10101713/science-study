import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage'
import LessonsPage from './pages/LessonsPage'
import AddLessonPage from './pages/AddLessonPage'
import ClassDetailPage from './pages/ClassDetailPage'
import ToolsPage from './pages/ToolsPage'
import LibraryPage from './pages/LibraryPage'
import LibraryBookPage from './pages/LibraryBookPage'
import DictionaryPage from './pages/DictionaryPage'
import ConceptPage from './pages/ConceptPage'
import QuizPage from './pages/QuizPage'
import ResultPage from './pages/ResultPage'
import ReviewPage from './pages/ReviewPage'
import DashboardPage from './pages/DashboardPage'
import DetailedReviewPage from './pages/DetailedReviewPage'
import SettingsPage from './pages/SettingsPage'
import RequireAuth from './components/RequireAuth'
import Layout from './components/Layout'
import { useLearningStore } from './lib/store'

function App() {
  const { userPreferences } = useLearningStore()

  const themeClasses = [
    userPreferences.darkMode ? 'dark-mode' : '',
    userPreferences.fontSize ? `font-${userPreferences.fontSize}` : '',
    userPreferences.accentColor ? `accent-${userPreferences.accentColor}` : '',
    userPreferences.reduceMotion ? 'reduce-motion' : '',
  ].filter(Boolean).join(' ')

  return (
    <Router>
      <div className={themeClasses}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          <Route element={<RequireAuth />}>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/lessons" element={<LessonsPage />} />
              <Route path="/tools" element={<ToolsPage />} />
              <Route path="/add-lesson" element={<AddLessonPage />} />
              <Route path="/class/:classId" element={<ClassDetailPage />} />
              <Route path="/library" element={<LibraryPage />} />
              <Route path="/library/:bookId" element={<LibraryBookPage />} />
              <Route path="/dictionary" element={<DictionaryPage />} />
              <Route path="/concept/:lessonId" element={<ConceptPage />} />
              <Route path="/quiz/:lessonId" element={<QuizPage />} />
              <Route path="/result/:lessonId" element={<ResultPage />} />
              <Route path="/log" element={<ReviewPage />} />
              <Route path="/log/detailed" element={<DetailedReviewPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
