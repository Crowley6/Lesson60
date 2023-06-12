import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import reduxstate from './Redux/reduxstate';


//запомнить и переписать на счет перерисовки

//создаем отдельную переменную для отрисовки реакт
const root = ReactDOM.createRoot(document.getElementById('root'));

//обработчик реакта(рендер)
const RerenderReact = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} dispatch={reduxstate.dispatch} />
      </BrowserRouter>
    </React.StrictMode>
  )
}

//обработчик событий для бэка
RerenderReact(reduxstate.getState())
reduxstate.subscribe(() => { RerenderReact(reduxstate.getState()) })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
