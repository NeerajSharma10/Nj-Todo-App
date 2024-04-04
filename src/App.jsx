
import TodoBox from './components/TodoBox'
import { useState } from 'react'

function App() {

  const [text, setText] = useState('')
  const [todoList, setTodoList] = useState({})

  const addHandler = () => {
    if(text) {
      todoList[Date.now()] = text
      const updatedTodoList = {...todoList}
      setTodoList(updatedTodoList)
      setText("")
      console.log(updatedTodoList);
    }
  }

  return (

    
      <div className=' font-medium flex justify-center w-full h-full pt-20 bg-zinc-900'>
        <div className='w-1/2 h-full '>
          <div className='w-full h-full flex justify-center items-center text-4xl text-red-700  font-bold my-7'>
            Manage Your Todos
          </div>
          <div className='w-full h-full flex justify-center items-center'>
            <input value={text} onChange={(e) => {
              setText(e.target.value)
            }} type="text" placeholder = "Write Text Here ..." className='outline-none w-11/12 h-full text-1xl rounded-l-2xl p-3'/>
            <button onClick={addHandler} className='bg-indigo-300 hover:bg-indigo-500 hover:cursor-pointer font-semi-bold text-1xl w-1/12 h-11 rounded-r-2xl'>Add</button>
          </div>
          <br />
          <div className='h-full'>
              {
                todoList.length != 0 ? 
                Object.entries(todoList).map(([keyName, value]) => {
                  console.log(keyName, " : ", value);
                  return <TodoBox setText={setText} setTodoList={setTodoList} keyIndex={keyName}  key = {keyName} todoList={todoList} addedText={value}/>   
                })
                : ""
            }
          </div>
        </div>
      </div>
  )
}

export default App
