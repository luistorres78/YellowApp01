import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import ListItem from '../screens/ListItems';
import Loading from '../screens/Loading';
import Main from '../screens/Main';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import publish from '../screens/Publish';
import CameraExample from '../screens/camera';
import Chat from '../screens/chat';


export default createStackNavigator(
  {
  Home: HomeScreen,
  List: ListItem,
  Loading: Loading,
  SignUp: SignUp,
  Login: Login,
  Main: Main,
  Publish: publish,
  Camera: CameraExample,
  Chat: Chat,
},
{
  initialRouteName: 'Home',
}
);