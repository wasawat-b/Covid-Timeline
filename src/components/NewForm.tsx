import classes from "./NewForm.module.css";
import { useRef } from "react";

const NewForm: React.FC = () => {
    const gender = useRef<HTMLSelectElement>(null);
    const age = useRef<HTMLInputElement>(null);
    const occupation = useRef<HTMLInputElement>(null);
    const date = useRef<HTMLInputElement>(null);
    const detail = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredValue = {
            gender: gender.current!.value,
            age: age.current!.value,
            occupation: occupation.current!.value,
            date: date.current!.value,
            detail: detail.current!.value,
        };

        console.log(enteredValue);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className={`container mb-4 p-4 ${classes.coverBlock}`}>
                <h2 className={classes.header}>ข้อมูลผู้ป่วย</h2>
                <div className='mb-3 row'>
                    <div className='col-6'>
                        <label className='form-label'>เพศ</label>
                        <select className='form-control' ref={gender}>
                            <option>ชาย</option>
                            <option>หญิง</option>
                        </select>
                    </div>
                    <div className='col-6'>
                        <label className='form-label'>อายุ</label>
                        <input className='form-control' type='number' ref={age} />
                    </div>
                </div>
                <label className='form-label'>อาชีพ</label>
                <input className='form-control' type='text' ref={occupation} />
            </div>
            <div className={`container p-4 ${classes.coverBlock}`}>
                <h2 className={classes.header}>ข้อมูลไทม์ไลน์</h2>
                <label className='form-label'>วันเวลา</label>
                <input className='mb-3 form-control' type='date' ref={date} />
                <label className='form-label'>รายละเอียด</label>
                <input className='mb-3 form-control' type='text' ref={detail} />
                <button className={classes.button}>+ เพิ่มข้อมูล</button>
            </div>
        </form>
    );
};

export default NewForm;