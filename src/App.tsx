import { useEffect, useRef, useState } from "react";
import Navbar from './components/Navbar'
import Header from './components/Header'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import Footer from "./components/Footer";

function App() {
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const [isOverProjects, setIsOverProjects] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOverProjects(entry.isIntersecting);
      },
      {
        threshold: 0,
      }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <>
      <Navbar isOnProjectsSection={isOverProjects}/>
      <Header/>
      <ExperienceSection ref={projectsRef} />
      <ProjectsSection />
      <Footer />
    </>
  )
}

export default App
