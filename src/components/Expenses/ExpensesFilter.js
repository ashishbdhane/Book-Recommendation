import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        {/* <label>Filter by Genre</label> */}
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='All'>All</option>
          <option value='Fiction'>Fiction</option>
          <option value='Novel'>Novel</option>
          <option value='Fantasy'>Fantasy</option>
          <option value='Romance'>Romance</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;