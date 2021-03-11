import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import '../Journal/Journal.css';

export default class CalendarSecond extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: null,
    };
  }

  componentDidUpdate() {
    if(this.props.selectedDay !== this.state.selectedDay){
      this.props.getDates(this.state.selectedDay);
    }
  }

  handleDayClick(day, { selected }) {
  
    this.setState({
      selectedDay: selected ? undefined : day,
      
    });
  }

  

  render() {
    
    return (
      <div className="containerCalendar">
                
        <DayPicker
          selectedDays={this.state.selectedDay}
          onDayClick={this.handleDayClick}
        />
        <p>
          {/* {this.state.selectedDay
            ? this.state.selectedDay.toLocaleDateString()
            : 'Please select a day 👻'} */}
        </p>
      </div>
    );
  }
}