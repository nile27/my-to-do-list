import { useEffect, useRef, useState} from "react";
import "./modal.css"

function Modal ( {showModal} ){
  const [start, setstart] = useState()
  const [end, setend] = useState()
  const [text, settext] = useState()

  const onChangeStart = (e) => {
    setstart(e.target.value)
  }

  const onChangeEnd = (e) => {
    setend(e.target.value)
  }

  const onChangetext = (e) => {
    settext(e.target.value)
  }
  
  

  return (
    <>
    <div className="modal">
      <div className="head">
        <h1>할 일 추가</h1>
        <button className="x" onClick={showModal}>x</button>
      </div>
      <div className="add-time-form">
        <input
          type="text" 
          placeholder="시작 시간" 
          value = {start}
          onChange={onChangeStart}
        />
        <input 
          type="text" 
          placeholder="끝나는 시간"
          value = {end}
          onChange={onChangeEnd}
        />
      </div>
      <textarea
        placeholder="스케줄 내용"
        value = {text}
        onChange = {onChangetext}
      ></textarea>
      <div className="button">
        <button type="submit" onClick = {showModal}>
          확인
        </button>
      </div>
    </div>

    </>
    
    
    
  )

}

export default Modal