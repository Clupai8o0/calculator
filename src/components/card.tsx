import Display from './display';
import CalculatorButtons from './calBtns';

import { NumTypes as n, OperatorType as o } from '../constants';

interface props {
  equation: string
  fn: {
    addDigit: (param: n) => void,
    addOperator: (param: o) => void,
    addDecimal: () => void,
    clear: () => void,
    calculate: () => void
  }
}

const Card = ({ equation, fn }: props) => {
  return (
    <div className="calculator">
      <Display equation={equation} />
      <CalculatorButtons 
        addDigit={fn.addDigit} 
        addOperator={fn.addOperator} 
        addDecimal={fn.addDecimal} 
        clear={fn.clear} 
        calculate={fn.calculate} 
      />
    </div>
  )
}

export default Card
