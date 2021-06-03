

const TimelineDetail: React.FC<{date: string; description: string;}> = (props) => {
  return (
      <div className="d-flex justify-content-center bg-white">
        <ul>
            <li>{props.date}</li>
            <li>{props.description}</li>
        </ul>
      </div>
  );
};

export default TimelineDetail;
