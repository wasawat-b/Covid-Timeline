import React, { useRef } from "react";
import { Item } from "../modal/items";
import { useAppDispatch } from "../store/hook";
import { listAction } from "../store/list-slice";

import classes from "./NewForm.module.css";

const NewForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const [description, setDescription] = React.useState("");

  const gender = useRef<HTMLSelectElement>(null);
  const age = useRef<HTMLInputElement>(null);
  const job = useRef<HTMLInputElement>(null);
  const date = useRef<HTMLInputElement>(null);

  const descriptionHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const newId = new Date().toISOString();

    const enteredValue: Item = {
      items: {
        id: newId,
        gender: gender.current!.value,
        age: age.current!.value,
        job: job.current!.value,
        detail: {
          date: date.current!.value,
          description: description,
        },
      },
    };

    dispatch(listAction.addData(enteredValue));

    date.current!.value = "";
    setDescription("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={`container mb-4 p-4 ${classes.coverBlock}`}>
        <h2 className={classes.header}>ข้อมูลผู้ป่วย</h2>
        <div className="mb-3 row">
          <div className="col-6">
            <label className="form-label">เพศ</label>
            <select className="form-control" ref={gender}>
              <option>ชาย</option>
              <option>หญิง</option>
            </select>
          </div>
          <div className="col-6">
            <label className="form-label">อายุ</label>
            <input className="form-control" type="number" ref={age} />
          </div>
        </div>
        <label className="form-label">อาชีพ</label>
        <input className="form-control" type="text" ref={job} />
      </div>
      <div className={`container p-4 ${classes.coverBlock}`}>
        <h2 className={classes.header}>ข้อมูลไทม์ไลน์</h2>
        <label className="form-label">วันเวลา</label>
        <input className="mb-3 form-control" type="datetime-local" ref={date} />
        <label className="form-label">รายละเอียด</label>
        <textarea className="mb-3 form-control" value={description} onChange={descriptionHandler}></textarea>
        <button className={classes.button}>+ เพิ่มข้อมูล</button>
      </div>
    </form>
  );
};

export default NewForm;
