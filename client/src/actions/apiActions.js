const apiConnection = "https://localhost:5001/messages";

// Get Request
export function handleGetMessages() {
  return function (dispatch) {
    return fetch(apiConnection)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_MESSAGES_SUCCESS", payload: json });
      })
      .catch((error) => {
        dispatch({ type: "GET_MESSAGES_ERROR", error: error });
      });
  };
}

// Post Request
export function handlePostMessage(message) {
  const date = new Date();
  return function (dispatch) {
    return fetch(apiConnection, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: message,
        postTime: date,
      }),
    }).then(() => {
      return fetch(apiConnection)
        .then((response) => response.json())
        .then((json) => {
          dispatch({ type: "GET_MESSAGES_SUCCESS", payload: json });
        })
        .catch((error) => {
          dispatch({ type: "GET_MESSAGES_ERROR", error: error });
        });
    });
  };
}
