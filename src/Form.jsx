import React from "react";

const Form = ({
  handleSubmit,
  countryName,
  onChangeCountryName,
  goldMedal,
  onChangeGoldMedal,
  silverMedal,
  onChangeSilverMedal,
  bronzeMedal,
  onChangeBronzeMedal,
  handleUpdateTable,
}) => {
  return (
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
  );
};

export default Form;
