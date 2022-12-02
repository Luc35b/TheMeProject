import React from "react";
import Calendar from "react-calendar";

const TheCalendar = ({ value, setValue }) => {
  const onChange = (date) => {
    setValue(date);
  };

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      {console.log(value)}
      {value.toString().substring(0,16)}
    </div>
  );
};

export default TheCalendar;
