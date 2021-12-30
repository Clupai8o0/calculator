interface props {
  equation: string
}

const Display = ({ equation }: props) => {
  return (
    <div className="calculator-display" id="display">
      <h1>{equation}</h1>
    </div>
  )
}

export default Display
