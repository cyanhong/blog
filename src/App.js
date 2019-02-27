import React, { Component, Fragment } from 'react';
import { Globalstyled } from './style.js';
import { Globalstyledd } from './statics/iconfont/iconfont.js';
import Header from './common/header';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter,Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Write from './pages/write';
import BlogList from './pages/bloglist';
import About from './pages/about';

class App extends Component {
  render() {
    return (
  	 <Provider store={store}>
	      <Fragment>
	        
	        <Globalstyled/>
	        <Globalstyledd/>
          <BrowserRouter>
            <div>
              <Header/>
              <Route path="/login" exact component={Login}></Route>
              <Route path="/register" exact component={Register}></Route>
              <Route path='/' exact component={Home}></Route>
              <Route path='/aboutme' exact component={About}></Route>
              <Route path="/bloglist" exact component={BlogList}></Route>
              <Route path="/write" exact component={Write}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
	      </Fragment>
      </Provider>
    );
  }
}

export default App;
