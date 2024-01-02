import React,{useState} from 'react'
import close from '../assets/close.png';

const AddTask = ({onClose, onAddTask}) => {

  const[title, setTitle] = useState('');
  const[description, setDescription] = useState('');

  const handleTitleChange = (event) =>{
    setTitle(event.target.value)
  }

  const handleDescriptionChange = (event) =>{
    setDescription(event.target.value)
  }

  const handleAddClick = () => {
    if(title && description){
      onAddTask({title, description})
      setTitle('')
      setDescription('')
    }
  }

  const handleDeleteAndExecuteOther = () => {
    handleAddClick();
    onClose();
  };

  return (
    <div className='flex items-center justify-center absolute   inset-0   mt-5'>
      <div className='flex justify-center flex-col  w-[500px] bg-white z-10 rounded-xl p-4 shadow-lg
                      shadow-gray-700'>
          <div className='flex flex-row p-2 mb-2'>
            <h1 className='text-black font-bold text-3xl ml-40'>Add Task</h1>
            <img src={close} alt="X" className= 'w-4 h-4 ml-32 hover:scale-125' onClick={ onClose } />
          </div>

          <div className='flex flex-col ml-8 p-2'>
            <h1 className='text-xl text-black p-1'>Title: </h1>
            <input type="text" id="first_name" className="w-96 bg-gradient-to-r from-indigo-600 to-blue-500
            rounded-lg text-white text-xl outline-none p-1"
            value={title}
            onChange={handleTitleChange}
            />
          </div>

          <div className='flex ml-8 flex-col p-2'>
            <h1 className='text-xl p-1 text-black'>Description: </h1>
            <textarea type="text" id="first_name" className="w-96 bg-gradient-to-r from-indigo-600 to-blue-500
            rounded-lg  text-white text-xl outline-none resize-none p-1"
            value={description}
            onChange={handleDescriptionChange}
            />
          </div>

          <div className='flex justify-center-p2 mb-2'>
              <button className='w-auto mx-auto mt-3 p-1 px-5 bg-b-red
                shadow-xl shadow-grey-500 rounded-lg text-lg text-white
                transition hover:scale-105 duration-50' onClick={handleDeleteAndExecuteOther}>
                Add
              </button>
          </div>
      </div>
    </div>
  )
}

export default AddTask 