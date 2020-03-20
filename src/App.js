import React, {useState}  from 'react';
import  GoalList   from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';


/* const App =() => {
  return <h1 title="this works!">Hi, this is React!</h1> // -> React.createElement('h1',{title:'this works!'},'Hi, this is React!')

} */

const App = () => {

  const[courseGoals, setCourseGoals]= useState(
    [
      {id: 'cg1', text: "Finish the course"},
      {id: 'cg2', text: "Learn all about the coruse Main Topic"},
      {id: 'cg3', text: "Help other students in the course Q&amp;A"}
      ]
  );

    const addNewGoalHandler = (newGoal) =>{
      //setCourseGoals(courseGoals.concat(newGoal));
      setCourseGoals( (prevCoruseGoals) =>{
        return prevCoruseGoals.concat(newGoal);
      });
    }
  return(
<   div>
    <h2 className="coruse-goals">Course Goals</h2>
    <NewGoal onAddGoal={addNewGoalHandler}  />
    <GoalList goals={courseGoals} />
  

    </div>);
};

export default App;
