import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { AppProvider } from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <div className="md:flex md:flex-col md:items-center">
        <Header />
        <Main />
      </div>
    </AppProvider>
  );
};

export default App;
