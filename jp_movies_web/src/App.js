import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import homePage from './pages/homePage';
import cinema from './pages/cinema';
import promotions from './pages/promotions';
import loginpage from './pages/loginpage';
import movies from './pages/movies';

function App() {
  return (
    <div className="App" style={{backgroundColor:'black'}}>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={homePage}></Route>
        <Route path='/cinema' Component={cinema}></Route>
        <Route path='/promotions' Component={promotions}></Route>
        <Route path='/loginpage' Component={loginpage}></Route>
        <Route path='/movies' Component={movies}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
