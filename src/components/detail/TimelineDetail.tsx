import { dayType } from "../../modal/items";
import DeleteButton from './DeleteButton';

import classes from "./TimelineDetail.module.css";

const TimelineDetail: React.FC<{ receivedDate: dayType[]; }> = (props) => {
  const receivedDate = props.receivedDate;

  const convertedDate = receivedDate.reduce<any>(
    (prev, cur) => ({
      ...prev,
      [cur.day]: (prev[cur.day] || []).concat(cur),
    }),
    {}
  );

  const dateArray = Object.keys(convertedDate);

  return (
    <div className={`container-lg m-0 p-0`}>
      {dateArray.sort((a,b) => (parseInt(a) - parseInt(b))).map((item) => (
        <div key={item} className={`container-lg m-0 p-0`}>
          <div className={`row`}>
            <div className={`container-lg col-3 col-sm-2 m-0 p-0 ${classes.timeline}`}>
              <p className={`${classes.dateClass}`}>{item}</p>
            </div>

            <div className={`container-lg col-8 col-sm-9 mb-4 p-2 ${classes.detail}`}>
              {receivedDate.sort((a,b) => (parseInt(a.time) - parseInt(b.time))).map((itemSomething) => (
                <div key={itemSomething.id} className={`${classes.timeClassCover}`}>
                  {item === itemSomething.day && (
                    <div className={`${classes.timeClass}`}>
                      <p className={`mb-2`}>
                        {itemSomething.time}{" "}
                        <span className={`${classes.span}`}>
                          {itemSomething.description}
                        </span>
                      </p>
                      <DeleteButton sentId={itemSomething.id}/>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineDetail;
