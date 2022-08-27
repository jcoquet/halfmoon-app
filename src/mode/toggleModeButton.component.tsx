import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MutableRefObject, useContext, useEffect, useRef } from 'react';
import { ModeContext } from './mode.context';

export const ToggleModeButton = () => {
  const rootNode: MutableRefObject<HTMLHtmlElement | undefined> = useRef();

  const { isDarkMode, setIsDarkMode } = useContext(ModeContext);

  useEffect(() => {
    rootNode.current = document.getElementsByTagName('html')[0];
  }, []);

  const toggleMode = () => {
    if (rootNode.current) {
      const isDarkMode = rootNode.current.classList.toggle('dark-mode');
      setIsDarkMode(isDarkMode);
    }
  };

  return (
    <button
      onClick={toggleMode}
      className="app__dark-mode-btn icon level-right"
    >
      {isDarkMode ? (
        <FontAwesomeIcon
          title="switch to light mode"
          icon={faSun}
          color="white"
        />
      ) : (
        <FontAwesomeIcon title="switch to dark mode" icon={faMoon} />
      )}
    </button>
  );
};
