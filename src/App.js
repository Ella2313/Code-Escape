import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [level, setLevel] =
useState(0);
  const [code, setCode] = useState("");
  const [answer, setAnswer] =
useState("");

  const correctCode = "321";
  const correctAnswer = "shadow";

  function startGame() {
    setLevel(1);
  }
  function checkCode() {
    if (code === correctCode) {
      alert("😸 Correct! You've unlocked Level 2!");

export default App;
