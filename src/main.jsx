import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"; //Debemos importar el browserRouter para hecharlo a andar
//import { HooksApp } from './HooksApp'
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { Layout } from './05-useLayoutEffect/Layout'
//import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
//import { CallbackHook } from './06-memos/CallbackHook'
//import { Padre } from './07-tarea-memo/Padre';
//import './08-useReducer/intro-reducer';
//import { TodoApp } from './08-useReducer/TodoApp';
//import { MainApp } from './09-useContext/MainApp';

import { MainAppContext } from './10-repaso-useContext/MainAppContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  //Para usar el Router tenemos que wrapear todo entre las llaves del Router. Es un componente de nivel superior (HOC). Son componentes que reciben otros componentes dentro de el.
  //Nos permite que todos los hijos tengan acceso a la informacion del padre
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MainAppContext />
    {/* </React.StrictMode> */}
  </BrowserRouter>

)
