import { useState } from 'react';
import './App.css';

function App() {

const q1 = -2;
const q2 = 12;
const q3 = 10;
const q4 = 5;
const q5 = 5;

const [q1State, q1SetState] = useState(0);
const [q2State, q2SetState] = useState(0);
const [q3State, q3SetState] = useState(0);
const [q4State, q4SetState] = useState(0);
const [q5State, q5SetState] = useState(0);

function submit(){
  let comp = [q1, q2, q3, q4, q5];
  let ans = [q1State, q2State, q3State, q4State, q5State];
  let calculator = [];
  let a = 0;

  for(a; a<comp.length; a++){
    if(comp[a]==ans[a]){
      calculator.push(a);
    }
  }

  let total = (calculator.length/ comp.length) * 100;

  document.getElementById('output').innerHTML = "You got " + total + "%";
}

  return (
    <div className="App">
      <div className='div1'>
        <ol>
          <li>What's 2 - 4?</li>
          <input type="number" onChange={(event)=>{q1SetState(event.target.value)}}/>
          <li>What's 3 times 4?</li>
          <input type="number" onChange={(event)=>{q2SetState(event.target.value)}}/>
          <li>What's 5 + 5?</li>
          <input type="number" onChange={(event)=>{q3SetState(event.target.value)}}/>
          <li>What's 20 / 4 ?</li>
          <input type="number" onChange={(event)=>{q4SetState(event.target.value)}}/>
          <li>What's the square root of 25?</li>
          <input type="number" onChange={(event)=>{q5SetState(event.target.value)}}/>
        </ol>
        <button className='button' onClick={()=>{submit()}}>Submit</button>
      </div>
      <p id='output'></p>
    </div>
  );
}

export default App;
