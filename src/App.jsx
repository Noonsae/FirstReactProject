import React, { useState } from "react";
import "./App.css";

const App = () => {
  // JS코드 작성 (함수, 변수, 등등)

  // State
  const [countryName, setCountryName] = useState("");
  const [goldMedal, setGoldMedal] = useState("");
  const [silverMedal, setSilverMedal] = useState("");
  const [bronzeMedal, setBronzeMedal] = useState("");
  const [countryList, setCountryList] = useState([]);

  // event

  //  1. input에 입력된 value값 받아오기
  const onChangeCountryName = (e) => setCountryName(e.target.value);
  const onChangeGoldMedal = (e) => setGoldMedal(e.target.value);
  const onChangeSilverMedal = (e) => setSilverMedal(e.target.value);
  const onChangeBronzeMedal = (e) => setBronzeMedal(e.target.value);

  //  2. 추가하기 버튼을 눌렀을 때 테이블에 데이터 추가
  const handleSubmit = (e) => {
    e.preventDefault();

    const newCountry = {
      countryName,
      goldMedal,
      silverMedal,
      bronzeMedal,
    };

    // some ?
    for (let i = 0; i < countryList.length; i++) {
      if (countryList[i].countryName.includes(countryName)) {
        alert(
          "입력하신 국가는 이미 등록된 국가입니다. 정보를 업데이트 하길 원하시면 업데이트 버튼을 눌러주세요."
        );
        return;
      }
    }

    setCountryList([...countryList, newCountry]);
    setCountryName("");
    setGoldMedal("");
    setSilverMedal("");
    setBronzeMedal("");

    // console.log(countryList);
  };

  //  3. 삭제 버튼을 눌렀을 때 테이블에 데이터 삭제하기
  const handleDeleteTable = (selectCountryName) => {
    const filteringCountryList = countryList.filter(
      (list) => list.countryName !== selectCountryName
    );
    setCountryList(filteringCountryList);
  };

  //  4. 업데이트 버튼을 눌렀을 때 테이블에 데이터 업데이트하기
  const handleUpdateTable = () => {
    // → 제출된 나라이름이 있으면,
    //   그 객체(컨트리리스트)안에 있는 다른 value(금은동메달)을 변경

    const updateList = countryList.map((list) => {
      const newList = { countryName, goldMedal, silverMedal, bronzeMedal };
      if (list.countryName === countryName){
        alert("입력하신 국가의 정보가 업데이트 되었습니다.")
        return newList;
      } else {
        alert("입력하신 국가는 등록되어있지 않습니다. 정보 추가를 원한다면 추가하기 버튼을 눌러주세요.")
        return list;
      }
    });

    setCountryList(updateList);
    setCountryName("");
    setGoldMedal("");
    setSilverMedal("");
    setBronzeMedal("");
  };

  return (
    // Rendering되는 UI (html)

    <div className="wrap">
      {/* title */}
      <h1 className="title">2024 파리 올림픽</h1>

      {/* 데이터를 입력하는 영역 (input, btn) */}
      <form className="input-wrap" onSubmit={handleSubmit}>
        {/* input에 입력되는 값을 props로 값을 저장해서 table에 넘겨줌 */}
        <fieldset className="input-area">
          <label htmlFor="">🚩국가명</label>
          <input
            type="text"
            value={countryName}
            placeholder="국가명을 입력해주세요."
            onChange={onChangeCountryName}
            required
          />
        </fieldset>
        <fieldset className="input-area">
          <label htmlFor="">🥇금메달</label>
          <input
            type="number"
            min={0}
            max={99}
            value={goldMedal}
            onChange={onChangeGoldMedal}
            placeholder={`금메달의 수량을 입력해주세요.`}
            required
          />
        </fieldset>
        <fieldset className="input-area">
          <label htmlFor="">🥈은메달</label>
          <input
            type="number"
            min={0}
            max={99}
            value={silverMedal}
            onChange={onChangeSilverMedal}
            placeholder={`은메달의 수량을 입력해주세요.`}
            required
          />
        </fieldset>
        <fieldset className="input-area">
          <label htmlFor="">🥉동메달</label>
          <input
            type="number"
            min={0}
            max={99}
            value={bronzeMedal}
            onChange={onChangeBronzeMedal}
            placeholder={`동메달의 수량을 입력해주세요.`}
            required
          />
        </fieldset>

        {/* add-country-btn을 클릭하면 table에 input 값 추가 */}
        <button type="submit" className="add-country-btn">
          추가하기
        </button>

        {/* table-update-btn을 클릭하면 table에 input 값을 변경 */}
        <button
          type="button"
          className="table-update-btn"
          onClick={handleUpdateTable}
        >
          업데이트
        </button>
      </form>

      {/* 구분선 */}
      <hr></hr>

      <div className="table-wrap">
        <table>
          {/* table의 제목 */}
          <thead>
            <tr>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
              <th>총합</th>
              <th>삭제하기</th>
            </tr>
          </thead>

          {/* tbody에 정보를 추가, 삭제 */}
          <tbody>
            {countryList.map((item) => (
              <tr>
                <td>{item.countryName}</td>
                <td>{item.goldMedal}</td>
                <td>{item.silverMedal}</td>
                <td>{item.bronzeMedal}</td>
                <td>
                  {Number(item.goldMedal) +
                    Number(item.silverMedal) +
                    Number(item.bronzeMedal)}
                </td>
                <td>
                  <button
                    type="button"
                    className="remove-data-btn"
                    onClick={() => handleDeleteTable(item.countryName)}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default App;
