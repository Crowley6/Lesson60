import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App/Appcss/css/App.css';
import Main from './Main/Main';
import Data from './Data/Data';
import FriendsContainer from './Friends/FriendsContainer';

function App(props) {
  return (
    <div className="App">
      <header>
        123
      </header>
      <aside>
        <ul>
          <li><a href='/Main'>Главная</a></li>
          <li><a href='/Friends'>Друзья</a></li>
          <li><a href='/Data'>Данные</a></li>
          <li><a href='/'>Выход</a></li>
        </ul>
      </aside>
      <main>
        <Routes>
          <Route path='/Main' element={<Main />} />
          <Route path='/Friends' element={<FriendsContainer state={props.state} dispatch={props.dispatch} />} />
          <Route path='/Data' element={<Data />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
