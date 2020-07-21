import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../action/filters";

class ExpenseListFilter extends React.Component {
    state = {
        calendarFocused: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(moment(startDate)))
        this.props.dispatch(setEndDate(moment(endDate)))
    };
    onFocusChange = (calendarFocused) => {  
        this.setState(() => ({ calendarFocused }));
    }
    render() {
        return (
            <div>
                <input type = "text" value = {this.props.filters.text} onChange = {(e) => {
                    this.props.dispatch(setTextFilter(e.target.value));
                }}/>
                <select 
                    value = {this.props.filters.sortBy} 
                    onChange = {(e) => {
                        if(e.target.value === "date")
                            this.props.dispatch(sortByDate());
                        else 
                            this.props.dispatch(sortByAmount());
                }}> 
                    <option value = "date">Date</option>
                    <option value = "amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate = {this.props.filters.startDate}
                    endDate = {this.props.filters.endDate}
                    onDatesChange = {this.onDatesChange}
                    focusedInput = {this.state.calendarFocused}
                    onFocusChange = {this.onFocusChange}
                    numberOfMonths = {1}
                    isOutsideRange = {() => false}
                    displayFormat = {"DD/MM/YYYY"}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilter);
