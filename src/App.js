import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from './providers/routes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <MainRoutes />
      <Footer />
    </Router>
  );
}

export default App;
