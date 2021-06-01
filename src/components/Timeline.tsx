import classes from "./Timeline.module.css";

const Timeline: React.FC = () => {
  const gender = "หญิง";
  const age = 23;
  const occupation = "Frontend Develop";

  return (
    <div className={`container ${classes.coverBorder}`}>
        <div className='d-flex justify-content-center'>
          <h1 className={classes.header}>Timeline</h1>
        </div>
        <div className='d-flex justify-content-center'>
          <p className={classes.patientDetail}>
            ผู้ป่วย{gender} อายุ {age} ปี <br />
            อาชีพ {occupation}
          </p>
        </div>
        <div className='d-flex justify-content-center bg-white'>
            <h1>Display timeline here</h1>
        </div>
    </div>
  );
};

export default Timeline;
