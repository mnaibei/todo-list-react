import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa"

const InputToDo = ({addToDoItem}) => {
  const[title, setTitle] = useState('');
  const[message, setMessage] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addToDoItem(title);
      setTitle('');
      setMessage('')
    } else {
      setMessage('Please add item');
    }
  }

  return(
    <>
    <form onSubmit={handleSubmit} className="form-container">
    <input type="text" 
      placeholder="Add Todo..." 
      value={title}
      onChange={handleChange}
      className="input-text"
    />
    <button className="input-submit"><FaPlusCircle/></button>
    </form>
    <span className="submit-warning">{message}</span>
    </>
  )
}

export default InputToDo;