const initState = {
  response: "",
  messages: [],
  error: "",
};

const apiReducer = (state = initState, { type, payload, error }) => {
  switch (type) {
    case "GET_MESSAGES_SUCCESS":
      return { ...state, messages: payload, response: "get success" };

    case "POST_SUCCESS":
      return { ...state, response: "post success" };

    case "GET_MESSAGES_ERROR":
      return {
        ...state,
        response: "get error",
        error: error,
      };

    case "POST_MESSAGES_ERROR":
      return {
        ...state,
        response: "post error",
        error: error,
      };

    default:
      return state;
  }
};

export default apiReducer;
