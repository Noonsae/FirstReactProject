import React from 'react'
import "./App.css";

const App = () => {
  return (
    <div className='wrap'>
      <h1 className='title'>2024 파리 올림픽</h1>

      <form className='input-wrap' action="#">
        <fieldset className="input-area">
          <label htmlFor="">국가명</label>
          <input type="text" placeholder='국가명을 입력해주세요.' />          
        </fieldset >
        <fieldset className="input-area">
          <label htmlFor="">금메달</label>
          <input type="text" placeholder='금메달 수량을 입력해주세요.' />          
        </fieldset>
        <fieldset className="input-area">
          <label htmlFor="">은메달</label>
          <input type="text" placeholder='은메달 수량을 입력해주세요.'/>          
        </fieldset>
        <fieldset className="input-area">
          <label htmlFor="">동메달</label>
          <input type="text" placeholder='동메달 수량을 입력해주세요.'/>          
        </fieldset>
        <button type='submit' className='add-country-btn'>추가하기</button>
        <button type='button' className='table-update-btn'>업데이트</button>
      </form>

      <hr></hr>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
              <th>액션</th>
            </tr>
          </thead>

          {/* tbody에 정보를 추가, 삭제 */}
          <tbody>
            <tr>
              <td>입력된 나라명</td>
              <td>입력된 금메달 수</td>
              <td>입력된 은메달 수</td>
              <td>입력된 동메달 수</td>
              <td>
                <button type='button' className="remove-data-btn"></button>
              </td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default App

