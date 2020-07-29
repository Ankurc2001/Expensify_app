   import React from 'react';
   import { connect } from 'react-redux';
   import { setTextFilter ,sortByDate,sortByAmount,setEndDate, setStartDate}  from '../action/filter'
   import { DateRangePicker } from 'react-dates';
   //import 'react-dates/lib/css/_datepicker.css';

export class ExpenseListFilter extends React.Component {
    state={
        calenderFocused:null
    };
    onDatesChange=({ startDate,endDate})=>{
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    onFocusChange=(calenderFocused)=>{
        this.setState(()=>({calenderFocused}))
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
      };
      onSortChange = (e) => {
        if (e.target.value === 'date') {
          this.props.sortByDate();
        } else if (e.target.value === 'amount') {
          this.props.sortByAmount();
        }
      };

    render(){
        return(
            <div>
            <input type="text" value={this.props.filters.text} onChange={(e)=>{
            props.dispatch(setTextFilter(e.target.value))
        }}/>
        <select value={this.props.filters.sortBy} 
        onChange={(e)=>{
            if(e.target.value ==='date'){
                this.props.dispatch(sortByDate())
            }else{
                this.props.dispatch(sortByAmount())
            }
        }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
        <DateRangePicker
            startDate={this.props.filters.startDate}
            //startDateId={"ijfjfdjdajn"}
            endDate={this.props.filters.endDate}
            //endDateId={"jhdjjhfjsdfjsbd"}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={()=>false}
        />
       </div>
        )
    }
}


const mapStateToProps =(state)=>{
    return{
        filters: state.filter
    };
};
export default connect(mapStateToProps)(ExpenseListFilter);