import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import './App.css';

// Lazy load components for better performance
const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const Hero = lazy(() => import('./components/About/Hero'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
  </div>
);

// Error Boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold text-red-600">Something went wrong.</h2>
          <p>Please refresh the page or try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <div className="font-sans bg-green-50 text-gray-800 relative overflow-x-hidden">
          {/* Water effect background */}
          <div className="fixed inset-0 bg-gradient-to-br from-green-100 to-green-200 opacity-30 -z-10" />
          
          <Navbar />
          <main>
            <Hero />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
