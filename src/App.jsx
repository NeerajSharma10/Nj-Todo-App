
import TodoBox from './components/TodoBox'
import { useState } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';

function App() {

  const [text, setText] = useState('')
  const [todoList, setTodoList] = useState({})
  const [darkThemeToggler, setDarkThemeToggler] = useState(true)

  const addHandler = () => {
    if(text) {
      todoList[Date.now()] = text
      const updatedTodoList = {...todoList}
      setTodoList(updatedTodoList)
      setText("")
      console.log(updatedTodoList);
    }
  }

  const darkModeClickHandler = () => {
    if(darkThemeToggler){
      setDarkThemeToggler(!darkThemeToggler)
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('white')
    }else{
      setDarkThemeToggler(!darkThemeToggler)
      document.documentElement.classList.remove('white')
      document.documentElement.classList.add('dark')
    }
  }

  return (

      <div>
        <div className='flex justify-end'>
          <DarkModeIcon onClick={darkModeClickHandler} fontSize='large' className=' mt-6 mr-6 hover:cursor-pointer text-black dark:text-white'/>
        </div>
        <div className=' font-medium flex justify-center w-full h-full pt-20'>
        <div className='w-1/2 h-full  '>
          <div className='w-full h-full flex justify-center items-center text-4xl  text-amber-950 dark:text-red-700  font-bold my-0'>
            Manage Your Todos
          </div>
          <br />
          <br />
          <div className='w-full h-full flex justify-center items-center dark:border-none border rounded-2xl border-sky-400 '>
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

      </div>

      
  )
}

export default App
