import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer, saveToLocalStorage, loadState } from './redux/reducers/rootReducer';
const presistedState = loadState();
console.log(presistedState)
const store = createStore(rootReducer,presistedState);
store.subscribe(state => {
    saveToLocalStorage(store.getState());
});
const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

// const routing = (
//   <Router>
//     <div>
//         <Navbar/>
//         <Router>
//               <Route exact path='/' component={App} />
//               <Route path='/contact' component={Contact} />
//               <Route path='/about' component={Users} />
//           </Router>
//           <Footer/>
//     </div>
//   </Router>
// )
// ReactDOM.render(routing, document.getElementById('root'))
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
