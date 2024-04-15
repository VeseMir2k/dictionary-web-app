import './App.css';
import Header from './components/header';
import { AppProvider } from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <Header />
      <div className="content"></div>
    </AppProvider>
  );
};

export default App;
