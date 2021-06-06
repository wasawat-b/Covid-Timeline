import React, { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";

import { dayType } from "../../modal/items";
import { listAction } from '../../store/list-slice';

import TimelineDetail from "./TimelineDetail";

import classes from "../Timeline.module.css";

const TimelineList: React.FC = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.items.items);
  const deleteList = useAppSelector(state => state.items.deleteTrigger);

  const [indexItem, setIndexItem] = React.useState(0);

  let foundIndex: number = 0;

  const selectValueHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    foundIndex = items.findIndex((item) => item.id === event.target.value);

    dispatch(listAction.changeDeleteTriggerDefault("false"));

    setIndexItem(foundIndex);
  };

  const sentDate: dayType[] = [];

  let indexShow: number = 0;
  if(deleteList === false) {
    indexShow = indexItem;
  }

  items[indexShow].detail.map((detail) => {
    let dayDate: string = "";
    let timeDate: string = "";
    if (detail.date) {
      const theDate = new Date(detail.date);
      dayDate = new Intl.DateTimeFormat("en-GB").format(theDate);

      const hour = new Date(theDate).getHours();
      const min = new Date(theDate).getMinutes();
      let updateHour: string = "";
      let updateMin: string = "";
      if (hour < 10) {
        updateHour = "0" + hour;
      } else {
        updateHour = hour.toString();
      }
      if (min < 10) {
        updateMin = "0" + min;
      } else {
        updateMin = min.toString();
      }
      timeDate = updateHour + ":" + updateMin;
    }

    sentDate.push({
      id: detail.id,
      day: dayDate,
      time: timeDate,
      description: detail.description,
    });
  });

  return (
    <div>
      <div className="mb-4 d-flex justify-content-center">
        {items[0].id ? (
          <div className={`btn ${classes.patientDetail}`}>
            <div data-bs-toggle="collapse" data-bs-target="#collapse-content">
              <p className={`m-0 ${classes.upFont}`}>
                ผู้ป่วย{items[indexShow].gender} อายุ {items[indexShow].age} ปี
              </p>
              <p className={`m-0 ${classes.bellowFont}`}>
                อาชีพ {items[indexShow].job}
              </p>
            </div>
            <select
              id="collapse-content"
              className={`collapse p-1 ${classes.selectClass}`}
              onChange={selectValueHandler}
            >
              {items.map((item) => (
                <option value={item.id} key={item.id}>
                  ผู้ป่วย{item.gender} อายุ {item.age} ปี อาชีพ {item.job}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <p className={classes.loading}>Loading</p>
        )}
      </div>
      {items[0].id ? <TimelineDetail receivedDate={sentDate} /> : null}
    </div>
  );
};

export default TimelineList;
