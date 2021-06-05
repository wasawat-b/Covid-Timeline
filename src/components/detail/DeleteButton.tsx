import { useAppDispatch } from "../../store/hook";
import { listAction } from "../../store/list-slice";
import classes from "./TimelineDetail.module.css";

const DeleteButton: React.FC<{ sentId: string }> = (props) => {
  const dispatch = useAppDispatch();

  const removeDataHandler = () => {
    if (window.confirm("Do you want to remove this detail?")) {
      dispatch(listAction.removeData(props.sentId));
    }
  };

  return (
    <div className={`container-lg m-0 p-0`}>
      <p className={`${classes.deleteButton}`} onClick={removeDataHandler}>
        x
      </p>
    </div>
  );
};

export default DeleteButton;
