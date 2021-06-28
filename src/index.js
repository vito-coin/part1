import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>{
  return (
    <div>
      { props.course }
    </div>
  )
}
const Content = (props) =>{
  return (
    <div>
      <p>Name: {
        props.parts[0].name
      }
      {
         props.parts[0].exercises
      }
      </p>
      <p>Name: {
        props.parts[1].name
      }
      {
         props.parts[1].exercises
      }
      </p>
      <p>Name: {
        props.parts[2].name
      }
      {
         props.parts[2].exercises
      }
      </p>
    </div>
  )
}
const Total = () =>{
  return (
    <div>

    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}
ReactDOM.render(<App />,document.getElementById('root'))