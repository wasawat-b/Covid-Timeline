import { listAction } from "./list-slice";
import { Items } from '../modal/items';

// GET method
export const fetchListdata = () => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://covid-timeline-f6472-default-rtdb.firebaseio.com/data.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const data = await fetchData();
      dispatch(listAction.receiveData(data));
    } catch (error) {
      alert(error);
    }
  };
};

// PUT method
export const sendListData = (data: Items) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://covid-timeline-f6472-default-rtdb.firebaseio.com/data.json",
        {
            method: "PUT",
            body: JSON.stringify({
                data: data,
            }),
            headers: {
                'Content-Type' : 'application/json'
            },
        }
      );

      if (!response.ok) {
          throw new Error ('Could not send data!');
      }
    };

    try {
        await sendRequest();
    } catch (error) {
        alert (error);
    }
  };
};
