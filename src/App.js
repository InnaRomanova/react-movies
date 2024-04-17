import React from 'react';
import './App.css';
import Footer from './components/layout/Footer';
import Header from "./components/layout/Header";
import Main from './components/layout/Main';

export default class App extends React.Component {
  render() {
    return (
    <>
    <Header />
    <Main />
    <Footer />
    </>
  )}
  
}
