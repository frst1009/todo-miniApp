import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeAll } from './Slice'
function Footer() {
    const count = useSelector((state) => state.todo.count);
    const dispatch = useDispatch();
    const deletion = ()=>{
dispatch(removeAll())
    }
    return (
    <div className='footer'>
         <footer className="footer">
    <span className="todo-count">
      <strong>{count}</strong>
      items left
    </span>
    <ul className="filters">
      <li>
        <a href="#/">Active</a>
      </li>
      <li>
        <a href="#/">Completed</a>
      </li>
    </ul>
    <button className="clear-completed" onClick={deletion}>Clear completed</button>
  </footer>
    </div>
  )
}

export default Footer