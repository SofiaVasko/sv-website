const initialState = {
  nightMode: "true",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LIGHT_MODE":
      return {
        ...state,
        nightMode: action.payload,
      };
    default:
      return state;
  }
};
