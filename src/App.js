import React, { Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/Common/Preloader/preloader';
import { withSuspense } from './components/HOC/withSuspense';

const DialogsContainer = React.lazy( () => import('./components/Dialogs/DialogsContainer'))

class App extends Component {
  componentDidMount(){
    this.props.initializeApp();
 }
  render(){
    if (!this.props.initialized){
      return <Preloader />
    }
    return(   
        <div className='app__wrapper'>
          <HeaderContainer/>
          <Navbar />
          <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
          <Route path="/profile/:userId?" render={ () => <ProfileContainer /> } />
          <Route path="/users" render={ () => <UsersContainer /> } />
          <Route path="/news" render={ () => <News /> } />
          <Route path="/music" render={ () => <Music /> } />
          <Route path="/settings" render={ () => <Settings /> } />
          <Route path="/login" render={ () => <Login /> } />
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized:state.app.initialized
})



export default compose(
  withRouter,
  connect(mapStateToProps,{initializeApp }))(App);
