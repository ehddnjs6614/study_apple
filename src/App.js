import React, { useState } from 'react'
import './App.css'

function App() {
  let [글제목, 글제목변경] = useState([
    'ㄷ남자 코드 추천',
    'ㄴ강남 우동 맛집',
    'ㄱ앙기못히',
    'ㄴ 화이팅하자',
  ])

  let [입력값, 입력값변경] = useState('')

  let [누른제목, 누른제목변경] = useState(0)

  let [따봉, 따봉변경] = useState([0, 0, 0, 0])
  let [modal, ModalChange] = useState(false)

  function 정렬() {
    let newArray = [...글제목]
    newArray.sort()
    글제목변경(newArray)
  }

  // function 좋아요(i) {
  //   let copyArray = [...따봉]
  //   copyArray[i]++
  //   따봉변경(copyArray)
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={정렬}>정렬하기</button>

      {글제목.map(function (글, i) {
        return (
          <div className="list">
            <h3
              onClick={() => {
                누른제목변경(i)
              }}
            >
              {글}
              <span
                onClick={() => {
                  let copyArray = [...따봉]
                  copyArray[i]++
                  따봉변경(copyArray)
                }}
              >
                ❤
              </span>
              {따봉[i]}
            </h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>
        )
      })}
      <div>
        <input
          onChange={e => {
            입력값변경(e.target.value)
          }}
        />
        <button
          onClick={() => {
            let ArrayCopy = [...글제목]
            ArrayCopy.unshift(입력값)
            글제목변경(ArrayCopy)
          }}
        >
          저장
        </button>
      </div>
      <button
        onClick={() => {
          ModalChange(!modal)
        }}
      >
        열닫
      </button>
      {modal === true ? (
        <Modal 글제목={글제목} 누른제목={누른제목} 따봉={따봉} />
      ) : (
        false
      )}
    </div>
  )
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App
