import './src/fonts/degular/main.css';
import './src/fonts/sf-ui-display/main.css';
import './src/styles/main.css';

// Hubspot page view tracking
export const onRouteUpdate = ({ location }) => {
  if (!Array.isArray(window._hsq)) {
    return null;
  }

  const trackPageView = () => {
    const path = location ? `${location.pathname}${location.search}${location.hash}` : undefined;
    window._hsq.push(['setPath', path]);
    window._hsq.push(['trackPageView']);
  };

  // wrap inside a timeout to make sure react-helmet is done with it's changes
  if (typeof window.requestAnimationFrame === 'function') {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(trackPageView)
    })
  } else {
    // simulate 2 requestAnimationFrame calls
    setTimeout(trackPageView, 32)
  }

  return null;
};
