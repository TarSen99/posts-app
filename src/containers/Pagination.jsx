import React from 'react'
import { connect } from 'react-redux'

import { getPosts } from "../store/actions";

import './../style/pagination.scss'

const STEP = 2;

const getPageButtons = (currentPage, step, maxPage) => {
  const res = [];
  const startValue = currentPage - step;

  for(let i = startValue; i <= (currentPage + step); i++) {
    if(i <= 0 || i > maxPage) {
      continue;
    }

    res.push(i);
  }

  return res;
};

const handlePaginationArrowButton = (value, page, maxPageValue, callback) => {
  if(page + value <= 0) {
    return
  }

  if(page + value > maxPageValue) {
    return
  }

  callback()
}

const mapStateToProps = state => {
  return {
    currentPage: state.page,
    maxPageValue: state.maxPageValue
  }
};

const Pagination = (props) => {
  const { currentPage, maxPageValue } = props
  const buttons = getPageButtons(currentPage, STEP, maxPageValue);

  return (
    <div className="pagination-container">
      <button
        onClick={
          () => handlePaginationArrowButton(
          -1,
          currentPage,
          maxPageValue,
          () => props.dispatch(getPosts(currentPage - 1)))
        }
      >
        Prev
      </button>
      {
        buttons.map(value => {
          return (
            <button
              onClick={() => props.dispatch(getPosts(value))}
              key={value}
              className={`pagination-button ${value === currentPage ? 'button-active' : ''}`}
            >
              { value }
            </button>
          )
        })
      }
      <button
        onClick={
          () => handlePaginationArrowButton(
            1,
            currentPage,
            maxPageValue,
          () => props.dispatch(getPosts(currentPage + 1)))
        }
      >
        Next
      </button>
    </div>
  )
};

export default connect(mapStateToProps)(Pagination)