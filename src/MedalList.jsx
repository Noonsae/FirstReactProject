import React from "react";

const MedalList = ({
  onChangeSort,
  handleSortChange,
  sortedCountryList,
  handleDeleteTable,
}) => {
  return (
    <div className="table-wrap">
      {/* title */}
      <h3>국가별 올핌릭 메달 정보</h3>

      <div className="sort-btn-wrap">
        <select
          className="sort"
          value={onChangeSort}
          onChange={handleSortChange}
        >
          <option value="goldMedal">금메달 순으로 정렬하기</option>
          <option value="totalMedals">메달의 총합 순으로 정렬하기</option>
        </select>
      </div>

      <div className="table-area">
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
            {sortedCountryList.map((item) => (
              <tr key={item.countryName}>
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

export default MedalList;
