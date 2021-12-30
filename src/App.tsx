import './index.css';
import { useState } from 'react';
import Card from './components/card';
import { NumTypes as n, ValueType as v, OperatorType as o } from './constants';

function App() {
  const [equation, setEquation] = useState('0');
  const [lastType, setLastType] = useState(v.C);

  const addDigit = (num: n) => {
    switch (lastType) {
      case v.O:
        setEquation(equation + ' ' + num);
        setLastType(v.N);
        break;
      case v.N:
        setEquation(equation + num);
        setLastType(v.N);
        break;
      case v.C:
        //todo set it for an enter too
        setEquation(num.toString());
        setLastType(v.N);
        break;
      case v.D:
        setLastType(v.N);
        if (num === n.Zero)
          return setEquation(equation + '0');
        setEquation(equation.slice(0, equation.length - 1) + num);
        break;
      default:
        break;
    }
  }

  const addOperator = (operator: o) => {
    switch (lastType) {
      case v.N:
        setEquation(equation + ' ' + operator);
        setLastType(v.O);
        break;
      case v.D:
        setEquation(equation + ' ' + operator);
        setLastType(v.O);
        break;
      default:
        break;
    }
  }

  const addDecimal = () => {
    if (lastType !== v.N)
      return;
    setEquation(equation + '.0');
    setLastType(v.D);
  }

  const clear = () => {
    if (lastType === v.C)
      return;
    setEquation('0');
    setLastType(v.C);
  }

  const calculate = () => {
    if (lastType === v.C)
      return;

    let eq = equation;
    if (lastType === v.O)
      eq = eq.slice(0, equation.length - 2);

    const arr = eq.split(' ');

    // BODMAS
    // looping for all operations
    //* division
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === o.Divide) {
        const num1 = arr[i - 1],
          num2 = arr[i + 1];
        arr.splice(i - 1, 3, (parseFloat(num1) / parseFloat(num2)).toString());
        i -= 1;
      }
    }
    //* multiplication
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === o.Multiply) {
        const num1 = arr[i - 1],
          num2 = arr[i + 1];
        arr.splice(i - 1, 3, (parseFloat(num1) * parseFloat(num2)).toString());
        i -= 1;
      }
    }
    //* addition
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === o.Add) {
        const num1 = arr[i - 1],
          num2 = arr[i + 1];
        arr.splice(i - 1, 3, (parseFloat(num1) + parseFloat(num2)).toString());
        i -= 1;
      }
    }
    //* subtraction
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === o.Subtract) {
        const num1 = arr[i - 1],
          num2 = arr[i + 1];
        arr.splice(i - 1, 3, (parseFloat(num1) - parseFloat(num2)).toString());
        i -= 1;
      }
    }
    setEquation(arr[0]);
  }

  return (
    <div className="app">
      <Card equation={equation} fn={{ addDigit, addOperator, addDecimal, clear, calculate }} />
    </div>
  )
}

export default App
