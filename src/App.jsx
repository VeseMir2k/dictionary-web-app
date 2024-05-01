import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { AppProvider } from './context/AppContext';
import './ThemeToggle.jsx';

const App = () => {
  return (
    <AppProvider>
      <Header />
      <Main />
    </AppProvider>
  );
};

export default App;
