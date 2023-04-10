import './App.css';
import { useState,useEffect } from 'react';
import Modal from './modal/modal.js'
import Todolist from './todolist';


function App() {
  const [green, setgreen] = useState(true)
  const [modalOpen, setModalOpen] = useState(false);
  const [todo,setTodo] = useState([{
    "start" : '9:00 AM',
    "end" : '10:00 AM',
    'todo' : '기상',
    'green' : 'green'
},
{
  "start" : '10:00 AM',
  "end" : '11:00 AM',
  'todo' : '수업 시작',
  'green' : 'green'
}])


  function showModal() {
    setModalOpen(!modalOpen);
  };

  function greenCheck(){
    setgreen(!green)
  }

  useEffect(() =>{
    setgreen();
  }, []);

  
  return (
    <>
    <div className={modalOpen ? "modal-container":'container'}>
      <div className='calender-container'>
        <div className='calender'>달력</div>
        <ul className='must-today'> 
          <li className='must-head'><span>오늘은 꼭!</span></li>
          <li className = 'must'>
            <div className='work'><span>ddddd<br/></span></div>
            <div className='time'><span>1:00 PM<br/></span></div>
            </li>
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
    {console.log(modalOpen)}
    </div>
    <div>{modalOpen ? <Modal showModal = {showModal} /> : null} </div>
    </>
  );
}

export default App;
