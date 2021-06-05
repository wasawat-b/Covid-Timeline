import { useEffect } from "react";

import NewForm from "./components/NewForm";
import Timeline from "./components/Timeline";

import { useAppDispatch, useAppSelector } from "./store/hook";
import { fetchListdata, sendListData } from "./store/list-action";

import classes from "./App.module.css";

function App() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(state => state.items);

  useEffect(()=>{
    dispatch(fetchListdata());
  }, []);

  useEffect(()=> {
    if(items.change) {
      dispatch(sendListData(items));
    }
  }, [items, dispatch]);

  return (
    <div className={classes.coverBlock}>
      <div className={`container-lg pt-4 ${classes.containerCover}`}>
        <h1 className={`${classes.headLine}`}>
          COVID Timeline Generator
        </h1>
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-4">
            <NewForm />
          </div>
          <div className="col-xl-7 col-lg-7 col-md-8">
            <Timeline />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
