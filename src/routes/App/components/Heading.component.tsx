import { useContext } from 'react';
import { ModeContext } from '../../../mode/mode.context';

export const Heading = () => {
  const { isDarkMode } = useContext(ModeContext);

  return <h1 className="title">Isalid {isDarkMode ? 'Dark' : 'Light'} Mode</h1>;
};
