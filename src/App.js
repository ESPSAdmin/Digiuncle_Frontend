import { Toaster } from 'react-hot-toast';
import './App.css';
import { Banner, Navbar, ProductCard} from './components';
import { Index as Route } from './routes'; 

function App() {
  return (
    <>
      <Toaster  />
      <Route />
    </>
  );
}

export default App;
