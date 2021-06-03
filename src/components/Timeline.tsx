import TimelineList from "./detail/TimelineList";

import classes from "./Timeline.module.css";

const Timeline: React.FC = () => {
  
  return (
    <div className={`container py-3 ${classes.coverBorder}`}>
      <div className="d-flex justify-content-center">
        <h1 className={classes.header}>Timeline</h1>
      </div>
      <TimelineList />
    </div>
  );
};

export default Timeline;
