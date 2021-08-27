import { connect } from "react-redux";
import React from "react";
import css from "./PhonebookFilter.module.css";

import { handleFilter } from "../../redux/rtk/filter-contacts";

const PhonebookFilter = ({ onSetFilter, filterValue }) => {
  return (
    <>
      <label>
        <p className={css.title}>Find contacts by name</p>
        <input
          name="filter"
          onInput={onSetFilter}
          type="text"
          value={filterValue}
        />
      </label>
    </>
  );
};

const mapStateToProps = (state, props) => ({
  filterValue: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onSetFilter: (e) => dispatch(handleFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookFilter);
