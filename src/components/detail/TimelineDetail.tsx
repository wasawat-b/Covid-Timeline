import classes from "./TimelineDetail.module.css";

const TimelineDetail: React.FC<{ date: string; description: string }> = (
  props
) => {
  const date = props.date;

  let dayDate: string = "";
  let timeDate: string = "";
  if (date) {
    const dayTime = new Date(date);
    dayDate = new Intl.DateTimeFormat("en-GB").format(new Date(dayTime));

    const hour = new Date(date).getHours();
    const min = new Date(date).getMinutes();
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

  return (
    <div className="d-flex justify-content-center bg-white">
      {date && (
        <ul>
          <li>{dayDate}</li>
          <li>{timeDate}</li>
          <li>{props.description}</li>
        </ul>
      )}
    </div>
  );
};

export default TimelineDetail;
