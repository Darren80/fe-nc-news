import logo from './logo.svg';
import './App.css';
import ArticleCards from './components/ArticleCards';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ArticlePage from './components/ArticlePage';

function App() {

  return (
    <div className="App">
      <header className="App-header"> 
          <Routes>
            <Route exact path='/' element={<ArticleCards />}/>
            <Route exact path='/article/:article_id' element={<ArticlePage />}/>
          </Routes>
      </header>
    </div>
  );
}

export default App;
