import { INIT_STARTED, INIT_SUCCEEDED, MANUFACTURER_CHANGE } from "./action";
const initialState = {
  loading: false,
  manufacturer: "Select",
  manufacturers: [],
  starships: [],
  data: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case INIT_STARTED:
      return { ...state, loading: true };
    case INIT_SUCCEEDED:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case MANUFACTURER_CHANGE: {
      let { manufacturer } = action.payload;
      const starships =
        manufacturer === "Select all Starships"
          ? state.data
          : state.data.filter((s) => s.manufacturer === manufacturer);

      return {
        ...state,
        starships,
      };
    }
    default:
      return state;
  }
};

export { reducer, initialState };
