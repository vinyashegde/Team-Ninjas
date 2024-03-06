import React, { useState, useEffect } from 'react';
import "./Calendar.css";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    generateCalendar();
    const intervalId = setInterval(updateClock, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentMonth, currentYear]);

  const generateCalendar = () => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const monthName = new Date(currentYear, currentMonth, 1).toLocaleString('default', { month: 'long' });

    document.getElementById('monthYear').textContent = `${monthName} ${currentYear}`;
    const calendarElement = document.getElementById('calendar');
    calendarElement.innerHTML = '';

    for (let i = 0; i < firstDay; i++) {
      calendarElement.innerHTML += '<li></li>';
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const li = document.createElement('li');
      li.innerHTML = `<time datetime="${currentYear}-${currentMonth + 1}-${day}">${day}</time>`;
      li.innerHTML += '<div class="tooltip">' +
                      `<strong>Job ${day % 10}</strong><br>` +
                      `<p>Criteria: Lorem ipsum dolor sit amet</p>` +
                      '<button class="apply-button">Apply Now</button>' +
                      '</div>';
      calendarElement.appendChild(li);
    }
  };

  const updateClock = () => {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    clockElement.innerHTML = `<time>${hours}:${minutes}:${seconds}</time>`;
  };

  const prevMonth = () => {
    setCurrentMonth((prevMonth) => {
      let newMonth = prevMonth - 1;
      let newYear = currentYear;
      if (newMonth < 0) {
        newMonth = 11;
        newYear--;
      }
      setCurrentYear(newYear);
      return newMonth;
    });
  };

  const nextMonth = () => {
    setCurrentMonth((prevMonth) => {
      let newMonth = prevMonth + 1;
      let newYear = currentYear;
      if (newMonth > 11) {
        newMonth = 0;
        newYear++;
      }
      setCurrentYear(newYear);
      return newMonth;
    });
  };

  return (
    <div>
      <div className="nav">
        <button onClick={prevMonth}>&lt; Prev</button>
        <h1 id="monthYear"></h1>
        <button onClick={nextMonth}>Next &gt;</button>
      </div>

      <ul id="calendar"></ul>
      <div id="clock"></div>
    </div>
  );
};

export default Calendar;
