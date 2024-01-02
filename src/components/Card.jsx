import React from 'react'

import Task from './Task';  
import AddTask from './AddTask';

const { useEffect, useState } = React



const Card = () => {
  const [currentDayOfWeek, setCurrentDayOfWeek] = useState('');

  const current = new Date();
  const currentDate = `${current.getDate()}`;
  const currentMonth = current.toLocaleString('default', {month: 'long',});
  // const currentDay = current.toLocaleString('default', {day: 'long',});

  useEffect(() => {
      const date = new Date();
      const options = { weekday: 'long' };
      const currentDayOfWeek = date.toLocaleString('en-US', options);
      setCurrentDayOfWeek(currentDayOfWeek);
  }, []);


  const[addtask, setaddtask] = useState(false);
  const handleOpenAddtask = () =>{setaddtask(true)}
  const handleCloseAddtask = () =>{setaddtask(false)}

  const[response, setResponse] = useState(false)


  const [tasklist, setTasks] = useState(
    [
      // {
      //   id : 1,
      //   title: 'Task 1',
      //   description: 'Complete the report for the project.',
      // },
      // {
      //   id : 2,
      //   title: 'Task 2',
      //   description: 'Buy groceries for the week.',
      // },
      // {
      //   id : 3,
      //   title: 'Task 3',
      //   description: 'Call the customer support regarding the issue.',
      // },
      // {
      //   id : 4,
      //   title: 'Task 4',
      //   description: 'Practice playing the guitar for 30 minutes.',
      // },
      // {
      //   id : 5,
      //   title: 'Task 5',
      //   description: 'Read a chapter from the book "The Alchemist".',
      // },
    ]
  );

  const handleDeleteTask = (taskID) => {
    const updateTasks = tasklist.filter((task)=>task.id !=taskID);
    setTasks(updateTasks);
    console.log(updateTasks)
  }

  const handleAddTask = (newTask) => {
      setTasks([...tasklist, { id: tasklist.length+1, ...newTask}]);
  }


  return (
    <div className='flex justify-center m-12'>
        <div className="w-full max-w-[700px] h-full max-h-[1200px] font-poppins
         text-white bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl p-3">
          <div className='flex flex-row justify-between'>
            <div className='p-2 m-5 my-4'>
              <h1 className='p-2 text-6xl'>ToDos</h1>
            </div>
            <div className='flex flex-col'>
              <div className='p-2 mx-5 mt-8'>
                <div className='text-2xl'>
                  {currentDate} {currentMonth}
                </div>
                <div className=' text-3xl '>
                  {currentDayOfWeek}
                </div>
              </div>
            </div> 
          </div> 
                  

            <div>
            {tasklist.length===0?
              (<h3 className='text-2xl my-10 flex justify-center text-blue-300'
              >Add your first task here</h3>):(
                <div className=''>
                <div className='flex flex-col items-center'>
                  {tasklist.map((tasks, index) =>(
                      <Task key={index} task={tasks}
                      onDeleteTask={handleDeleteTask}/>
                      
                  ))}
                </div>
              </div>
              )
            }
            </div>
            <div className='flex justify-center p-4'>
              <button className='w-[200px] p-2 bg-b-red
                shadow-xl shadow-grey-500 rounded-full text-2xl font-bold
                transition hover:scale-105 duration-50'
                onClick={handleOpenAddtask}>
                +
              </button>
              {addtask && <AddTask onClose={handleCloseAddtask} onAddTask={handleAddTask}/>}
            </div>
        </div>
    </div>  
  )
}

export default Card