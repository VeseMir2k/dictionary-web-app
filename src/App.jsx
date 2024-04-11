import './App.css';
import Header from './components/header';
import { AppProvider } from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <Header />
    </AppProvider>
  );
};

export default App;
