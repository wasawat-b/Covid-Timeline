import React, { ChangeEvent } from "react";
import { useAppSelector } from "../../store/hook";

import TimelineDetail from "./TimelineDetail";

import classes from "../Timeline.module.css";

const TimelineList: React.FC = () => {
  const items = useAppSelector((state) => state.items.items);

  const [selectedValue, setSelectedValue] = React.useState("");

  const selectValueHandler = (event: ChangeEvent<HTMLSelectElement>) => {
      setSelectedValue(event.target.value);
  };

  const indexItem = items.findIndex(
    (item) => item.id === selectedValue
  );

  return (
    <div>
      <div className="mb-4 d-flex justify-content-center">
        <select
          className={`form-select ${classes.patientDetail}`}
          value={selectedValue}
          onChange={selectValueHandler}
        >
          <option>Select Patient</option>
          {items
            ? items.map((item) => (
                <option value={item.id} key={item.id}>
                  ผู้ป่วย{item.gender} อายุ {item.age} ปี อาชีพ {item.job}
                </option>
              ))
            : null}
        </select>
      </div>
      {items[indexItem]
        ? items[indexItem].detail.map((detail, index) => (
            <TimelineDetail
              key={index}
              date={detail.date}
              description={detail.description}
            />
          ))
        : null}
    </div>
  );
};

export default TimelineList;
