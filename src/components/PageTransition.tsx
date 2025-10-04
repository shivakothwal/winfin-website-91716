import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("page-enter");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("page-exit");
    }
  }, [location, displayLocation]);

  useEffect(() => {
    if (transitionStage === "page-exit") {
      const timeout = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("page-enter");
      }, 200); // Half of exit animation duration
      return () => clearTimeout(timeout);
    }
  }, [transitionStage, location]);

  return (
    <div 
      className={`animate-${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "page-enter") {
          setTransitionStage("");
        }
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;