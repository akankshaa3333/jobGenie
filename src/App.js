import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { lazy, Suspense } from 'react';

// Lazy imports
const SignIn = lazy(() => import('./pages/SignIn'));
const Signup = lazy(() => import('./pages/Signup'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const Home = lazy(() => import('./pages/Home'));
const JobsList = lazy(() => import('./components/JobsList'));
const Profile = lazy(() => import('./pages/Profile'));
const InternshipList = lazy(() => import('./components/InternshipList'));
const Learn = lazy(() => import('./components/Learn'));
const Ebook = lazy(() => import('./components/Ebook'));
const InteractiveTutorials = lazy(() => import('./components/InteractiveTutorials'));
const WatchVideo = lazy(() => import('./components/WatchVideo'));
const Competitions = lazy(() => import('./components/Competitions'));
const CodingChallenges = lazy(() => import('./components/CodingChallenges'));
const DailyQuizzes = lazy(() => import('./components/DailyQuizzes'));
const SkillAssessments = lazy(() => import('./components/SkillAssessments'));
const About = lazy(() => import('./pages/About'));

const PrivateRoute = ({ element }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div className="loader">Loading...</div>;

  return user ? element : <Navigate to="/signin" replace />;
};

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="loader">Loading...</div>}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/about" element={<About />} />

          {/* Protected Routes */}
          <Route path="/home" element={<PrivateRoute element={<Home />} />} />
          <Route path="/jobs" element={<PrivateRoute element={<JobsList />} />} />
          <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
          <Route path="/internships" element={<PrivateRoute element={<InternshipList />} />} />
          
          {/* Learning Routes */}
          <Route path="/start-learning" element={<PrivateRoute element={<Learn />} />} />
          <Route path="/interactive-tutorials" element={<PrivateRoute element={<InteractiveTutorials />} />} />
          <Route path="/watch-videos" element={<PrivateRoute element={<WatchVideo />} />} />
          <Route path="/explore-resources" element={<PrivateRoute element={<Ebook />} />} />
          
          {/* Competition Routes */}
          <Route path="/competitions" element={<PrivateRoute element={<Competitions />} />} />
          <Route path="/coding-challenges" element={<PrivateRoute element={<CodingChallenges />} />} />
          <Route path="/daily-quizzes" element={<PrivateRoute element={<DailyQuizzes />} />} />
          <Route path="/skill-assessments" element={<PrivateRoute element={<SkillAssessments />} />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
