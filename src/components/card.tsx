import Overlay from "../popUpShow.tsx/overlay";
import { useAppDispatch } from "../store/hook";
import { listAction } from "../store/list-slice";

import classes from "./card.module.css";

const Card: React.FC = () => {
  const dispatch = useAppDispatch();

  const CloseCardHandler = () => {
    dispatch(listAction.showSuccess("false"));
  };

  return (
    <Overlay onCloseCard={CloseCardHandler}>
      <div className={classes.container}>
        <p className={classes.success}>Successfully sent!</p>
        <div className={`container-lg m-0 p-0`}>
          <p className={`${classes.deleteButton}`} onClick={CloseCardHandler}>
            x
          </p>
        </div>
      </div>
    </Overlay>
  );
};

export default Card;
