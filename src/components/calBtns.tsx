import { NumTypes as n, ValueType as v, OperatorType as o } from '../constants';

interface props {
  addDigit: (param: n) => void,
  addOperator: (param: o) => void,
  addDecimal: () => void,
  clear: () => void,
  calculate: () => void
}

const CalculatorButtons = ({ addDigit, addOperator, addDecimal, clear, calculate }: props) => {
  return (
    <div className="calculator-buttons">
      <button className="operator" onClick={() => addOperator(o.Add)}>+</button>
      <button className="operator" onClick={() => addOperator(o.Subtract)}>-</button>
      <button className="operator" onClick={() => addOperator(o.Multiply)}>×</button>
      <button className="operator" onClick={() => addOperator(o.Divide)}>÷</button>

      <button onClick={() => addDigit(n.Seven)}>7</button>
      <button onClick={() => addDigit(n.Eight)}>8</button>
      <button onClick={() => addDigit(n.Nine)}>9</button>
      <button onClick={() => addDigit(n.Four)}>4</button>
      <button onClick={() => addDigit(n.Five)}>5</button>
      <button onClick={() => addDigit(n.Six)}>6</button>
      <button onClick={() => addDigit(n.One)}>1</button>
      <button onClick={() => addDigit(n.Two)}>2</button>
      <button onClick={() => addDigit(n.Three)}>3</button>

      <button className="decimal" onClick={() => addDecimal()}>.</button>
      <button onClick={() => addDigit(n.Zero)}>0</button>

      <button className="clear" id="clear-btn" onClick={clear}>C</button>
      <button className="equal-sign operator" onClick={calculate}>=</button>
    </div>
  )
}

export default CalculatorButtons
