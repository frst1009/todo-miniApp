import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './Slice'


function Header() {
    const [change, setchange] = useState("")
   
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(change));
        setchange('');
    };
   
    
  return (
    <div className='header'>
        <header className="header">
  <h1>todos</h1>
  <form onSubmit={handleSubmit}>
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autofocus=""
      value={change}
      onChange={e=>setchange(e.target.value)}
    />
  </form>
</header>
    </div>
  )
}

export default Header