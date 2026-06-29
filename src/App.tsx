import { useState, useEffect } from 'react';
import ComingSoon from './components/ComingSoon';
import MainWebsite from './components/MainWebsite';

export default function App() {
  const [showSite, setShowSite] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/site' || path === '/site/') {
      setShowSite(true);
    }
  }, []);

  if (showSite) {
    return <MainWebsite onShowComingSoon={() => { window.location.href = '/'; }} />;
  }

  return <ComingSoon />;
}
