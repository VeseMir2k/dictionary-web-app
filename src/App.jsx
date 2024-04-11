import './App.css';
import Header from './components/header';
import { FontProvider } from './context/AppContext';

const App = () => {
  return (
    <FontProvider>
      <Header />
    </FontProvider>
  );
};

export default App;
