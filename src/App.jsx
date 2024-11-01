import React, { useState } from "react";
import "./App.css";
import MedalList from "./MedalList";
import FormWarp from "./FormWrap";

const App = () => {
  // JS코드 작성 (함수, 변수, 등등)

  // State
  const [countryName, setCountryName] = useState("");
  const [goldMedal, setGoldMedal] = useState("");
  const [silverMedal, setSilverMedal] = useState("");
  const [bronzeMedal, setBronzeMedal] = useState("");
  const [countryList, setCountryList] = useState([]);
  const [onChangeSort, setOnChangeSort] = useState("goldMedal");

  // event
  //  1. input에 입력된 value값 받아오기
  //  함수처리로 가독성 높이기
  const onChangeCountryName = (e) => setCountryName(e.target.value);
  const onChangeGoldMedal = (e) => setGoldMedal(e.target.value);
  const onChangeSilverMedal = (e) => setSilverMedal(e.target.value);
  const onChangeBronzeMedal = (e) => setBronzeMedal(e.target.value);
  const handleSortChange = (e) => setOnChangeSort(e.target.value);

  //  2. 추가하기 버튼을 눌렀을 때 테이블에 데이터 추가
  const handleSubmit = (e) => {
    e.preventDefault();

    const newCountry = {
      countryName,
      goldMedal,
      silverMedal,
      bronzeMedal,
    };

    if (countryList.some((item) => item.countryName === countryName)) {
      alert(
        "입력하신 국가는 이미 등록된 국가입니다. 정보를 업데이트 하길 원하시면 업데이트 버튼을 눌러주세요."
      );
      return;
    }

    alert("입력하신 국가의 메달 정보가 등록되었습니다.");
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
    console.log(filteringCountryList);
    setCountryList(filteringCountryList);
    alert("선택한 국가의 정보가 삭제되었습니다.");
  };

  //  4. 업데이트 버튼을 눌렀을 때 테이블에 데이터 업데이트하기
  const handleUpdateTable = () => {
    const countryToUpdate = countryList.find(
      (list) => list.countryName === countryName
    );

    if (countryToUpdate) {
      alert("입력하신 국가의 정보가 업데이트 되었습니다.");
      const newList = { countryName, goldMedal, silverMedal, bronzeMedal };

      const updateList = countryList.map((list) =>
        list.countryName === countryName ? newList : list
      );
      setCountryList(updateList);
    } else {
      alert(
        "입력하신 국가는 등록되어 있지 않습니다. 정보 추가를 원한다면 추가하기 버튼을 눌러주세요."
      );
    }
    setCountryName("");
    setGoldMedal("");
    setSilverMedal("");
    setBronzeMedal("");
  };

  //  5. 정렬하기
  const sortedCountryList = [...countryList];
  sortedCountryList.sort((a, b) => {
    if (onChangeSort === "goldMedal") {
      return b.goldMedal - a.goldMedal;
    } else if (onChangeSort === "totalMedals") {
      const getTotalMedal = (list) =>
        Number(list.goldMedal) +
        Number(list.silverMedal) +
        Number(list.bronzeMedal);
      return getTotalMedal(b) - getTotalMedal(a);
    }
  });

  return (
    // Rendering되는 UI (html)
    <div className="wrap">
      {/* title */}
      <h1 className="title">2024 파리 올림픽</h1>

      {/* FormWarp */}
      <FormWarp
        handleSubmit={handleSubmit}
        countryName={countryName}
        onChangeCountryName={onChangeCountryName}
        goldMedal={goldMedal}
        onChangeGoldMedal={onChangeGoldMedal}
        silverMedal={silverMedal}
        onChangeSilverMedal={onChangeSilverMedal}
        bronzeMedal={bronzeMedal}
        onChangeBronzeMedal={onChangeBronzeMedal}
        handleUpdateTable={handleUpdateTable}
      />

      {/* 구분선 */}
      <hr />

      {/* MedalList */}
      <MedalList
        onChangeSort={onChangeSort}
        handleSortChange={handleSortChange}
        sortedCountryList={sortedCountryList}
        handleDeleteTable={handleDeleteTable}
      />
    </div>
  );
};
export default App;
