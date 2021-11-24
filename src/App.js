import './App.css';
import ShoesHome from './components/ShoesHome/ShoesHome';
import CartHome from './components/CartHome/CartHome';
import LoginUser from './components/LoginUser/LoginUser';
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <LoginUser />
      <ShoesHome />
      <CartHome />
    </div>
  );
}

export default App;
