const PatientButton: React.FC<{
  number: number;
  gender: string;
  age: string;
  job: string;
}> = (props) => {
  return (
    <option value={props.number}>
      ผู้ป่วย{props.gender} อายุ {props.age} ปี อาชีพ {props.job}
    </option>
  );
};

export default PatientButton;
