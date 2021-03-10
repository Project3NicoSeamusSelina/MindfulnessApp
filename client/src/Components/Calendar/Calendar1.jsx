import React, { useState } from 'react';
import Calendar from 'react-calendar';

export default function Results() {
    // set states of calendar date
    const [calDate, setCalDate] = useState(new Date())

    function onChange (calDate) {
      //change the results according to the calendar date click
      setCalDate(calDate)
      console.log(setCalDate(calDate))
      // const filteredResults = data.filter(result => {
      //     const newResultFormat = new Date(result.created_at).toLocaleString().split(",")[0]
      //     const newCalDateFormat = calDate.toLocaleString().split(",")[0]
      //     return newResultFormat === newCalDateFormat
      // })
  }

    return (
        <div className="result-calendar">
            <Calendar onChange={onChange} value={calDate} />
        </div>
    )

}