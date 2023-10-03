import './App.css';
import { Navbar } from './components/Navbar';
import { Routers } from './components/Routers';
import { Footer } from './components/Footer';

import { useState } from 'react';

function App() {
  const [darkTheme,setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? '' : 'dark'}>
    <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 min-h-screen ">
      <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
      <Routers />
      <Footer />
    </div>
  </div>
  );
}

export default App;
