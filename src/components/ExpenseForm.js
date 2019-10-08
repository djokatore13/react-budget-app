import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
 
  // Changes for description
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }

  // Changes for note
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  }

  // Changes for amount
  onAmountChange = (e) => {
    const amount = e.target.value; 
    
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  }

  // Changes for date
  onDateChange = (createdAt) => {
    if(createdAt) {
      this.setState(() => ({ createdAt }));
    }
  }

  // Changes for focus
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  }

  // Submit
  onSubmit = (e) => {
    e.preventDefault();
    
    if(!this.state.description || !this.state.amount) {
      // Set error state
      this.setState(() => ({ error: 'Please provide description and amount!' }));
    } else {
      // Clear error
      this.setState(() => ({ error: ''}));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100, // * 100 ako  hocemo da kontrolisemo decimalni zapis, tj. zaokruzimo u penije, pare(100 delove valute)
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input 
          type="text" 
          placeholder="Description"
          autoFocus
          className="text-input"
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input 
          type="number"
          placeholder="Amount"
          className="text-input"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker 
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea 
          placeholder="Add a note for your expense.(optional)"
          className="text-area"
          value={this.state.note}
          onChange={this.onNoteChange}
        ></textarea>
        <div>
          <button className="button button--btn">Save Expense</button> 
        </div>
      </form>
    );
  }
}