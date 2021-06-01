import NewForm from "./components/NewForm";
import Timeline from "./components/Timeline";

import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.coverBlock}>
      <div className="container">
      <h1 className={`m-0 py-4 ${classes.headLine}`}>COVID Timeline Generator</h1>
        <div className="row">
          <div className='col-5'>
          <NewForm />
          </div>
          <div className='col-7'>
          <Timeline />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
