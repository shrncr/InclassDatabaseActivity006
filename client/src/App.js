import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import EditForm from './components/editform';

function App() {
  let [formID, setFormID] = useState(441);
  return (
    <>
      <Sidebar setFormID = {setFormID}/>
      <EditForm FormID = {formID} setFormID = {setFormID}/>
    </>
  );
}

export default App;
