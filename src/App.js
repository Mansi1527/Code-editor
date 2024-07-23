import './App.css';
import Home from './components/Home';
import DataProvider from './context/DataProvider';
import './index.css';
function App() {
  return (
    <DataProvider >
      <Home/>
    </DataProvider>
  );
}

export default App;
