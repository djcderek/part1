import { useState } from 'react'

const Button = (props) => {
  return (
    <div>
      <button onClick={props.eventHandler}>{props.text}</button>
    </div>
  )
}

const Quote = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
      <div>{props.quote}</div>
      <div>has {props.votes} votes</div>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(Array(8).fill(0))

  const selectQuote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const castVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    console.log(votes.indexOf(Math.max(...votes)))
  }

  return (
    <div>
      <Quote text='Anecdote of the day' quote={anecdotes[selected]} votes={votes[selected]}/>
      <Button eventHandler = {castVote} text='vote'/>
      <Button eventHandler = {selectQuote} text='next anecdote'/>
      <Quote text='Anecdote with most votes' quote={anecdotes[votes.indexOf(Math.max(...votes))]} votes={votes[votes.indexOf(Math.max(...votes))]} />
    </div>
  )
}

export default App