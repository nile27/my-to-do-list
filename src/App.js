import './App.css';
import { useState,useEffect } from 'react';
import Modal from './modal/modal.js'
import Todolist from './component/todolist';
import Must from './component/Must.js'

function App() {
  const [must, setmust] = useState([{
    id : 1,
    'todo' : '점심'
  }])
  const [todo,setTodo] = useState([{
    "id" : 1,
    'todo' : '기상',
},
{
  "id" : 2,
  'todo' : '수업 시작',
}])

  const [modalOpen, setModalOpen] = useState(false);


  function showModal() {
    setModalOpen(!modalOpen);
  };

  function addTodo(ntodo) {
    console.log(ntodo)
    const newtodo = {
      'id': todo.length+1,
      'todo' : ntodo
    }
    const newArr = [...todo,newtodo]

    setTodo(newArr)
    console.log(todo)
  }

  useEffect(() => {
    const sorted = [...todo].sort((a,b) => a.id - b.id);
    
  }, [todo])

  
  return (
    <>
    <div className={modalOpen ? "modal-container":'container'}>
      <div className='calender-container'>
        <div className='calender'>달력</div>
        <div className='must-head'><span>오늘은 꼭!</span></div>
        <ul className='must-today'> 
          <Must item = {must} />
        </ul>
      </div>
      <div className='to-do-container'>
        <header>
          <button className='todo-add' onClick={showModal} >
            할 일 추가
          </button>
          <span>TO - DO LIST</span>
          <div className='data'>
            <div className='today'>4.7 (금)</div>
            <div className='green-red'> 
              <div className='close' ></div>
              완료 
              <div className='check' ></div> 
              미완료
            </div>
          </div>
        </header>
        <nav>
          <div className='item1'><span>꼭 할일!</span></div>
          <div className='item2'><span>오늘 할 일</span></div>
          <div className='item3'><span>완료 여부</span></div>
        </nav>
        <ul className='todoList'>
          {todo.map((item, idx) => <Todolist item = {item} key = {idx} />)}
        </ul>
      </div>
    </div>
    <div>{modalOpen ? <Modal showModal = {showModal} addTodo = {addTodo} /> : null} </div>
    </>
  );
}

export default App;
