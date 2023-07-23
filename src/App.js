import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Main />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
