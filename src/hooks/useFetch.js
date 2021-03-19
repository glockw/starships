import { useEffect, useReducer } from "react";
import {
  INIT_STARTED,
  INIT_SUCCEEDED,
  MANUFACTURER_CHANGE,
} from "../utils/action";
import { initialState, reducer } from "../utils/reducer";
import { get_manufacturers } from "../utils/service";

export default function useFetch() {
  const [{ loading, manufacturers, starships }, dispatch] = useReducer(
    reducer,
    initialState
  );
  useEffect(() => {
    dispatch({
      type: INIT_STARTED,
    });
    const fetch = async () => {
      const resp = await get_manufacturers();
      dispatch({
        type: INIT_SUCCEEDED,
        payload: {
          manufacturers: ["Select all Starships", ...resp.manufacturers],
          starships: resp.starships,
          data: [...resp.starships],
        },
      });
    };
    fetch();
  }, []);

  const changeManufacturer = (manufacturer) => {
    dispatch({
      type: MANUFACTURER_CHANGE,
      payload: {
        manufacturer,
      },
    });
  };
  return {
    loading,
    manufacturers,
    starships,
    changeManufacturer,
  };
}
