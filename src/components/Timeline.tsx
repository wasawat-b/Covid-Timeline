import { useAppSelector } from "../store/hook";
import TimelineDetail from './detail/TimelineDetail';

import classes from "./Timeline.module.css";

const Timeline: React.FC = () => {
  const items = useAppSelector((state) => state.items.items);

  return (
    <div className={`container ${classes.coverBorder}`}>
      <div className="d-flex justify-content-center">
        <h1 className={classes.header}>Timeline</h1>
      </div>
      <div className="d-flex justify-content-center">
        <p className={classes.patientDetail}>
          ผู้ป่วย{items[0].gender} อายุ {items[0].age} ปี <br />
          อาชีพ {items[0].job}
        </p>
      </div>
      {items[0].detail.map((detail)=>(
        <TimelineDetail
          key={items[0].id}
          date={detail.date}
          description={detail.description}
        />
      ))}
    </div>
  );
};

export default Timeline;
