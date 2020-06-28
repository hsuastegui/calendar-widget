import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import next from "../../assets/next.svg";
import previous from "../../assets/previous.svg";
import {
  getRows,
  getNextMonth,
  getPrevMonth,
  getCurrentMonth,
  getFormattedDate,
  getToday,
  getUpdatedDate,
  format,
} from "../../utils";
import {
  Container,
  Day,
  Bubble,
  Row,
  WeekDays,
  WeekDay,
  Header,
  Button,
} from "./style";

const week = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

function Calendar({ open, onSelect, selected }) {
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [selectedDate, setSelectedDate] = useState("");
  const today = getToday();
  const currentDate = getFormattedDate(currentMonth);
  const year = currentDate.year();
  const month = currentDate.format("MMMM");

  useEffect(() => {
    if (selected === "") {
      setSelectedDate("");
      setCurrentMonth(getCurrentMonth());
    }
  }, [selected]);

  const handlePrev = () => {
    setCurrentMonth(getPrevMonth(currentDate));
  };

  const handleNext = () => {
    setCurrentMonth(getNextMonth(currentDate));
  };

  const handleClick = (d) => {
    const date = getUpdatedDate(currentDate, d);
    setSelectedDate(date.format(format));
    onSelect(date.format("DD/MM/YYYY"));
  };

  return (
    <Container open={open}>
      <Header>
        <Button prev onClick={handlePrev}>
          <img src={previous} alt="previous" />
        </Button>
        <span>
          {month} {year}
        </span>
        <Button next onClick={handleNext}>
          <img src={next} alt="next" />
        </Button>
      </Header>
      <WeekDays>
        {week.map((w) => (
          <WeekDay key={w}>{w}</WeekDay>
        ))}
      </WeekDays>
      {getRows(currentDate).map((r) => (
        <Row key={r.join("")}>
          {r.map((d, i) => (
            <Day key={i}>
              {d !== "" && (
                <Bubble
                  onClick={() => {
                    handleClick(d);
                  }}
                  current={today === `${year}-${month}-${d}`}
                  selected={selectedDate === `${year}-${month}-${d}`}
                >
                  {d}
                </Bubble>
              )}
            </Day>
          ))}
        </Row>
      ))}
    </Container>
  );
}

Calendar.defaultProps = {
  open: false,
  onSelect: () => {},
  selected: "",
};

Calendar.propTypes = {
  open: PropTypes.bool,
  onSelect: PropTypes.func,
  selected: PropTypes.string,
};
export default Calendar;
