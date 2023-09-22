import Header from './Components/Header/Header.component.jsx'
import Content from './Components/Content/Content.component.jsx'
const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <h1><Header course={course} ></Header></h1>
            <p>
                {exercises1}
                <Content part={part1}></Content>
            </p>
            <p>
                {exercises2}
                <Content part={part2}></Content>
            </p>
            <p>
                {exercises3}
                <Content part={part3}></Content>
            </p>
            <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
        </div>
    )
}

export default App
