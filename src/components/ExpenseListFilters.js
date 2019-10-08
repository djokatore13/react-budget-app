import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filtersAction';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  // On Dates Change
  onDatesChange = ({ startDate, endDate}) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }

  // On Focus Change
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }

  // On Text Change
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  }

  // On Sort Change
  onSortChange = (e) => {
    if(e.target.value === 'date') {
      this.props.sortByDate();
    } else if(e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  }

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input 
              type="text"
              placeholder="Search expenses"
              className="text-input" 
              value={this.props.filters.text} 
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.sortBy} 
              onChange={this.onSortChange}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker 
              startDate={this.props.filters.startDate}
              startDateId="MyDatePicker"
              endDate={this.props.filters.endDate}
              endDateId="MyDatePicker"
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
        </div>




      </div>
    );
  }
}

const mapStateToProps = (state) => ({ 
  filters: state.filters 
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(ExpenseListFilters);