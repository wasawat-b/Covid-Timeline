import { dayType } from "../../modal/items";

const Try: React.FC<{ something: dayType[] }> = (props) => {
  const something = props.something;

  const getSomething = something.reduce<any>(
    (prev, cur) => ({
      ...prev,
      [cur.day]: (prev[cur.day] || []).concat(cur),
    }),
    {}
  );

  const newArray4 = Object.keys(getSomething);

  return (
    <div className="bg-white">
      {newArray4.map((item) => (
        <div key={item}>
          <p>{item}</p>
          {something.map((itemSomething) => (
            <div key={itemSomething.time}>
              {item === itemSomething.day && <p>{itemSomething.time}</p>}
              {item === itemSomething.day && <p>{itemSomething.description}</p>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Try;
