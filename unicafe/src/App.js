import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Button = (props) => {
  return (
      <button onClick={props.eventHandler}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
  // return <div>{props.text} {props.value}</div>
}

const Statistics = (props) => {
  if (props.good + props.neutral + props.bad === 0) {
    return 'No feedback given'
  }
  return (
    <div>
      <StatisticLine text='good' value={props.good}/>
      <StatisticLine text='neutral' value={props.neutral}/>
      <StatisticLine text='bad' value={props.bad}/>
      <StatisticLine text='all' value={props.good + props.neutral + props.bad}/>
      <StatisticLine text='average' value={(props.good - props.bad)/(props.good + props.neutral + props.bad)}/>
      <StatisticLine text='positive' value={(props.good/(props.good + props.neutral + props.bad))* 100 + ' %'}/>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodBtn = () => {
    console.log('good', good)
    setGood(good + 1)
  }

  const neutralBtn = () => {
    setNeutral(neutral + 1)
  }

  const badBtn = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header name='give feedback'/>
      <Button eventHandler = {goodBtn} text='good'/>
      <Button eventHandler = {neutralBtn} text='neutral'/>
      <Button eventHandler = {badBtn} text='bad'/>
      <Header name='statistics'/>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App