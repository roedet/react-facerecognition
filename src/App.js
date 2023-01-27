import React from 'react';
import './style.css';
import Login from './components/Login/Login';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

export default function App() {
  return (
    <div>
      <Login />
      <Logo />
      <ImageLinkForm />
      <Rank />
      <h1>Hello StackBlitz!</h1>
    </div>
  );
}
