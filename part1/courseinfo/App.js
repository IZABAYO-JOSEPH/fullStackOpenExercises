import React from "react";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};
const Part = (props) => {
  // console.log(props);
  return (
    <div>
      {props.part}
      {props.exercises}
    </div>
  );
};
const Content = (props) => {
  // console.log(props);
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  );
};
const Total = (props) => {
  return <p>the total number of exercises is {props.parts}</p>;
};
const App = () => {
  const course = {
    name: "Half stack application development",
    parts: [
      {
        name: "fundamentals of react",
        exercises: 10,
      },
      {
        name: "using props to pass data",
        exercises: 7,
      },
      {
        name: "state of component",
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total
        parts={
          course.parts[0].exercises +
          course.parts[1].exercises +
          course.parts[2].exercises
        }
      />
    </div>
  );
};
export default App;
