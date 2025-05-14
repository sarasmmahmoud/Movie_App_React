import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import Faviorates from './pages/faviorate';
import { Route } from 'react-router-dom';
import NavBar from './components/navbar';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import MovieList from './pages/moviesList';
import MovieDetails from './pages/movieDetails';
import NotFound from './pages/notfound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        {/* <Login /> */}
        <switch>
          <Route path="/" component={Home} exact/>
          <Route path="/fav" component={Faviorates} exact/>
          <Route path="/login" component={Login} exact/>
          <Route path="/register" component={Register} exact/>
          <Route path="/movie" component={MovieList} exact/>
          <Route path="/movie/:id" component={MovieDetails} exact/>
          {/* <Route path={"*"}    component={NotFound} exact/> */}
        </switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
