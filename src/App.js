import React from 'react';
import { RecoilRoot } from 'recoil';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <RecoilRoot>
      <Header />
      <TaskFilter />
      <TaskList />
      <Footer />
    </RecoilRoot>
  );
}

export default App;

