import { dayType } from "../../modal/items";
import DeleteButton from './DeleteButton';

import classes from "./TimelineDetail.module.css";

const TimelineDetail: React.FC<{ something: dayType[]; }> = (props) => {
  const something = props.something;

  const getSomething = something.reduce<any>(
    (prev, cur) => ({
      ...prev,
      [cur.day]: (prev[cur.day] || []).concat(cur),
    }),
    {}
  );

  const newArray4 = Object.keys(getSomething);

  /* event: React.MouseEvent<HTMLParagraphElement> */
  const removeDataHandler = () => {
  };

  return (
    <div className={`container m-0 p-0`}>
      {newArray4.sort((a,b) => (parseInt(a) - parseInt(b))).map((item) => (
        <div key={item} className={`container m-0 p-0`}>
          <div className={`row`}>
            <div className={`container col-2 m-0 p-0 ${classes.timeline}`}>
              <p className={`${classes.dateClass}`}>{item}</p>
            </div>

            <div className={`container col-9 mb-4 p-2 ${classes.detail}`}>
              {something.sort((a,b) => (parseInt(a.time) - parseInt(b.time))).map((itemSomething) => (
                <div key={itemSomething.id}>
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
