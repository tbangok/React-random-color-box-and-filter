import { useEffect, useState } from 'react'
import './App.css'
import { ColorBox } from './components/colorBox'

const randomColor = () => {
  return Math.round(Math.random() * 255)
}

function App() {
  const [boxes, setBoxes] = useState([])
  const [filteredBox, setFilteredBox] = useState(boxes)
  const [filterRed, setFilterRed] = useState(0)
  const [filterGreen, setFilterGreen] = useState(0)
  const [filterBlue, setFilterBlue] = useState(0)
  const [filterName, setFilterName] = useState(0)

  let value = boxes;
  let filteredValue;

  useEffect(() => {
    filteredValue = value
      .filter(box => box.red > filterRed)
      .filter(box => box.green > filterGreen)
      .filter(box => box.blue > filterBlue)
      .filter(box => parseInt(box.name) >= filterName)
    setFilteredBox(filteredValue)
  }, [boxes, filterRed, filterGreen, filterBlue, filterName])



  function handleAddBox() {
    const red = randomColor();
    const green = randomColor();
    const blue = randomColor();
    setBoxes([...boxes, {
      name: boxes.length.toLocaleString(),
      red, green, blue,
      color: `rgb(${red},${green},${blue})`
    }])
  }

  function handleOnChangeInputRed(e) {
    if (0 <= e.target.value && e.target.value <= 255) {

      setFilterRed(e.target.value)

    } else alert('Hay nhap so lon hon 0 va be hon 255')
    s
  }

  function handleOnChangeInputGreen(e) {
    if (0 <= e.target.value && e.target.value <= 255) {

      setFilterGreen(e.target.value)
    } else alert('Hay nhap so lon hon 0 va be hon 255')

  }

  function handleOnChangeInputBlue(e) {
    if (0 <= e.target.value && e.target.value <= 255) {

      setFilterBlue(e.target.value)
    } else alert('Hay nhap so lon hon 0 va be hon 255')

  }

  function handleOnChangeInputName(e) {
    setFilterName(e.target.value)

  }

  return (
    <>
      <h1>Color Box</h1>
      <div>
        <strong  > Filter Name  </strong>
        <input type='number' onChange={handleOnChangeInputName}></input>
      </div>
      <div>
        <strong style={{ color: 'red' }}> Filter Red  </strong>
        <input type='number' onChange={handleOnChangeInputRed}></input>
      </div>
      <div>
        <strong style={{ color: 'green' }}> Filter Green  </strong>
        <input type='number' onChange={handleOnChangeInputGreen}></input>
      </div>
      <div>
        <strong style={{ color: 'blue' }}> Filter Blue  </strong>
        <input type='number' onChange={handleOnChangeInputBlue}></input>
      </div>
      <button onClick={handleAddBox}>Add color box</button>
      <ColorBox allBox={filteredBox} />
    </>
  )
}

export default App

