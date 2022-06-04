
import './App.scss';
import { Navigate, Route, Routes  } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import MovieDetail from './components/MovieDetails/MovieDetails';
import MovieCard from './components/MovieCard/MovieCard';

function App() {
  return (
 <>
   <Header/>
      <Routes>
      
      
        <Route  exact path="/"  element={<Home/>}/>
        <Route  path="/movie/:imdbID" element={<MovieDetail/>}/>
        <Route  element={<PageNotFound/>}/>
        


       
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
