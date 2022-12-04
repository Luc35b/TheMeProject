import React from "react";
import Calendar from "react-calendar";

const TheCalendar = ({ value, setValue }) => {
  const onChange = (date) => {
    setValue(date);
  };

  return (
    <div>
      <Calendar onChange={onChange} value={value} className="max-w-[500px] text-center mx-auto text-2xl m-10 bg-opacity-50 rounded-md shadow-lg shadow-sky-800"/>
      {console.log(value)}
      {value.toString().substring(0,16)}
    </div>
  );
};

export default TheCalendar;
