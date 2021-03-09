import React from "react";
import moment from 'moment';
import 'moment-timezone';
import './Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 


export default class Calendar extends React.Component {
  state = {
      dateContext: moment(),
      today: moment(),
      showMonthPopup: false,
      showYearPopup: false,
      selectedDay: null,
      testMonth:"",
  }

  componentDidUpdate(){
      if(this.props.currentDay != this.state.selectedDay && this.props.currentMonth != this.state.testMonth) {
          console.log(this.state, this.props, "props & atate at calander")
        this.props.setSelectedDate(this.state.selectedDay, this.state.testMonth || this.state.today)
      }
      
  }

  constructor(props) {
      super(props);
      this.width = props.width || "350px"; 
      this.style = props.style || {};
      this.style.width = this.width; // add this
  }


  weekdays = moment.weekdays(); //["Sunday", -"Saturday"]
  weekdaysShort = moment.weekdaysShort(); // ["Sun" - "Sat"]
  months = moment.months();

  year = () => {
      return this.state.dateContext.format("Y");
  }
  month = () => {
      return this.state.dateContext.format("MMMM");
  }
  daysInMonth = () => {
      return this.state.dateContext.daysInMonth();
  }
  currentDate = () => {
      console.log("currentDate: ", this.state.dateContext.get("date"));
      return this.state.dateContext.get("date");
  }
  currentDay = () => {
      return this.state.dateContext.format("D");
  }

  firstDayOfMonth = () => {
      let dateContext = this.state.dateContext;
      let firstDay = moment(dateContext).startOf('month').format('d'); // Day of week 0...1..5...6
      return firstDay;
  }

  setMonth = (month) => {
      let monthNo = this.months.indexOf(month);
      let dateContext = Object.assign({}, this.state.dateContext);
      dateContext = moment(dateContext).set("month", monthNo);
      this.setState({
          dateContext: dateContext,
          testMonth: dateContext
      });
  }

  nextMonth = () => {
      let dateContext = Object.assign({}, this.state.dateContext);
      dateContext = moment(dateContext).add(1, "month");
      this.setState({
          dateContext: dateContext
      });
      this.props.onNextMonth && this.props.onNextMonth();
  }

  prevMonth = () => {
      let dateContext = Object.assign({}, this.state.dateContext);
      dateContext = moment(dateContext).subtract(1, "month");
      this.setState({
          dateContext: dateContext
      });
      this.props.onPrevMonth && this.props.onPrevMonth();
  }

  onSelectChange = (e, data) => {
      console.log("this is the month",data)
      this.setMonth(data);
      this.props.onMonthChange && this.props.onMonthChange();
      this.setState({
        currentMonth: data
    });
  }
  
  SelectList = (props) => {
      let popup = props.data.map((data) => {
          return (
              <div key={data}>
                  <a href="#" onClick={(e)=> {this.onSelectChange(e, data)}}>
                      {data}
                  </a>
              </div>
          );
      });

      return (
          <div className="month-popup">
              {popup}
          </div>
      );
  }

  onChangeMonth = (e, month) => {
           this.setState({
          showMonthPopup: !this.state.showMonthPopup
      });
  }

  MonthNav = () => {
      return (
          <span className="label-month"
              onClick={(e)=> {this.onChangeMonth(e, this.month())}}>
              {this.month()}
              {this.state.showMonthPopup &&
               <this.SelectList data={this.months} />
              }
          </span>
      );
  }

  showYearEditor = () => {
      this.setState({
          showYearNav: true
      });
  }

  setYear = (year) => {
      let dateContext = Object.assign({}, this.state.dateContext);
      dateContext = moment(dateContext).set("year", year);
      this.setState({
          dateContext: dateContext
      })
      console.log(this.state.dateContext)
  }
  onYearChange = (e) => {
      this.setYear(e.target.value);
      this.props.onYearChange && this.props.onYearChange(e, e.target.value);
  }

  onKeyUpYear = (e) => {
      if (e.which === 13 || e.which === 27) {
          this.setYear(e.target.value);
          this.setState({
              showYearNav: false
          })
      }
  }

  YearNav = () => {
      return (
          this.state.showYearNav ?
          <input
              defaultValue = {this.year()}
              className="editor-year"
              ref={(yearInput) => { this.yearInput = yearInput}}
              onKeyUp= {(e) => this.onKeyUpYear(e)}
              onChange = {(e) => this.onYearChange(e)}
              type="number"
              placeholder="year"/>
          :
          <span
              className="label-year"
              onDoubleClick={(e)=> { this.showYearEditor()}}>
              {this.year()}
          </span>
      );
  }

  onDayClick = (e, day, month, year) => {
      this.setState({
          selectedDay: day,
          selectedMonth: month,
          selectedYear: year
        
      }, () => {
        //   console.log("SELECTED DAY: ", this.state.selectedDay);
      });
    //   console.log('HEREAGAIN!', this.props.onDayClick)
      console.log("TARGETED", e, day, month, year)
      this.props.onDayClick && this.props.onDayClick(e, day, month, year);
   
        // console.log('HERE!', this.props.onDayClick)
        
  }

  render() {
     
      // Map the weekdays i.e Sun, Mon, Tue etc as <td>
      let weekdays = this.weekdaysShort.map((day) => {
          return (
              <td key={day} className="week-day">{day}</td>
          )
      });

      let blanks = [];
      for (let i = 0; i < this.firstDayOfMonth(); i++) {
          blanks.push(<td key={i * 80} className="emptySlot">
              {""}
              </td>
          );
      }

      console.log("blanks: ", blanks);

      let daysInMonth = [];
      for (let d = 1; d <= this.daysInMonth(); d++) {
          let className = (d == this.currentDay() ? "day current-day": "day");
          let selectedClass = (d == this.state.selectedDay ? " selected-day " : "")
          daysInMonth.push(
              <td key={d} className={className + selectedClass} >
                  <span onClick={(e)=>{this.onDayClick(e, d)}}>{d}</span>
              </td>
          );
      }


      console.log("days: ", daysInMonth);

      var totalSlots = [...blanks, ...daysInMonth];
      let rows = [];
      let cells = [];

      totalSlots.forEach((row, i) => {
          if ((i % 7) !== 0) {
              cells.push(row);
          } else {
              let insertRow = cells.slice();
              rows.push(insertRow);
              cells = [];
              cells.push(row);
          }
          if (i === totalSlots.length - 1) {
              let insertRow = cells.slice();
              rows.push(insertRow);
          }
      });

      let trElems = rows.map((d, i) => {
          return (
              <tr key={i*100}>
                  {d}
              </tr>
          );
      })

      return (
        <div className="container bg-dark d-flex justify-content-center pt-5 pb-5">
          <div className="">
                 <table className="calendar">
                  <thead>
                      <tr className="calendar-header">
                      <th scope="row"></th>
                          <td colSpan="5">
                              <this.MonthNav />
                              {" "}
                              <this.YearNav />
                          </td>
                          <td colSpan="2" className="nav-month">
                                <i className="prev fa fa-fw fa-chevron-left"
                                    onClick={(e)=> {this.prevMonth()}}>
                                </i>
                                <i className="prev fa fa-fw fa-chevron-right"
                                    onClick={(e)=> {this.nextMonth()}}>
                                </i>

                          </td>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          {weekdays}
                      </tr>
                      {trElems}
                  </tbody>
              </table>

          </div>
          </div>
      );
  }
}