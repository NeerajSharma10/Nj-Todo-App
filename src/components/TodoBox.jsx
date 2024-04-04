import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

const TodoBox = ({ addedText, setTodoList, todoList, keyIndex , setText}) => {

  const [inputBgColor, setInputBgColor] = useState('bg-white');
  const [isChecked, setIsChecked] = useState(false) 
  const [isEdit, setIsEdit] = useState(false)
  const [insideInputText, setInsideInputText] = useState(addedText)

  const onChangeHandler = () => {
    console.log(keyIndex, isChecked);
    setIsChecked(!isChecked)
    console.log(keyIndex, isChecked);
    if(isChecked) {
      setInputBgColor('bg-white')
    }else{
      setInputBgColor('bg-slate-400')
    }
    if(isEdit){
      setIsEdit(false)
    } 
  }

  const clearClickHandler = () => {
    if(isChecked){
      const deletedTodoList = {...todoList}
      delete deletedTodoList[keyIndex]
      console.log(deletedTodoList);
      setTodoList(deletedTodoList)
    }
    setText("")
  }

  const editClickHandler = () => {
    if(isChecked) {
      setIsEdit(!isEdit)
    }
  }

  const saveClickHandler = () => {
    if(isEdit) {
      setIsEdit(!isEdit)
      setIsChecked(!isChecked)
      setInputBgColor('bg-white')
    }
  }

  return (
    <>
      <div className= {`font-medium transition duration-1000 rounded-2xl w-full h-1/3  ${inputBgColor} flex justify-center items-center`}>
        <div className='w-1/2 h-full  flex justify-start gap-4 items-center'>
          <input type="checkbox" checked = {isChecked} onChange={onChangeHandler} className='ml-4 size-4' />
          {
            isChecked && isEdit ? 
              <input type="text" className='  outline-none rounded-md pl-1 '  value={insideInputText} onChange={(e) => {setInsideInputText(e.target.value)}}/>
            : <span className=' text-center text-1xl text-black-100'>{insideInputText}</span>
          }
        </div>
        <div className='w-1/2 h-full flex justify-end  items-center gap-4'>
          {
            isChecked && isEdit ? 
            <SaveAltIcon onClick={saveClickHandler}  className= ' hover:bg-sky-400 hover: cursor-pointer bg-sky-200 rounded-md  m-3'/>
            : <EditIcon onClick={editClickHandler} fontSize='medium' className='hover:bg-green-400 hover:cursor-pointer bg-green-200 rounded-md  m-3' />

          }
          <ClearIcon onClick={clearClickHandler} fontSize='medium' className='hover:bg-red-400 bg-red-200 hover:cursor-pointer rounded-md mr-4' />
        </div>
      </div>
      <br />
    </>
  )
}

export default TodoBox