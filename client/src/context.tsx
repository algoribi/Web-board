import React, { FC, createContext, useReducer, Reducer, useContext } from "react";

interface State {
  postId : number;
  alertsMessage : string;
  toggleSuccessAlerts : boolean;
  toggleFailAlerts : boolean;
  toolButton : string;
  textFieldTitle : string;
  textFieldName : string;
  textFieldContent : string;
}

interface Action {
  type : string;
  value : boolean | number | string | string[];
}

const MyContext = createContext<[State, React.Dispatch<Action>] | undefined>(undefined);

const setAddPostData = async (postContent: string[]) => {
  const date = new Date();
  await fetch('http://localhost:8000/write/insert', {
    method : "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body : JSON.stringify({
      title : postContent[0],
      name : postContent[1],
      content : postContent[2]
    })
  });
}

const setDeletePostData = async (postId : number) => {
  await fetch('http://localhost:8000/read/delete', {
    method : "POST",headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body : JSON.stringify({
      id : postId
    })
  });
}

const reducer :  Reducer<State, Action> = (state, action) : State => {
  if (action.type === "POST_ID" && typeof action.value === 'number') {
    return {...state, postId : action.value};
  } else if (action.type === "ALERTS_MESSAGE" && typeof action.value === 'string') {
    return {...state, alertsMessage : action.value};
  } else if (action.type === "TOGGLE_SUCCESS_ALERTS" && typeof action.value === 'boolean') {
    return {...state, toggleSuccessAlerts : action.value};
  } else if (action.type === "TOGGLE_FAIL_ALERTS" && typeof action.value === 'boolean') {
    return {...state, toggleFailAlerts : action.value};
  } else if (action.type === "TOOL_BUTTON" && typeof action.value === 'string') {
    return {...state, toolButton : action.value};
  } else if (action.type === "TEXT_FIELD_TITLE" && typeof action.value === 'string') {
    return {...state, textFieldTitle : action.value};
  } else if (action.type === "TEXT_FIELD_NAME" && typeof action.value === 'string') {
    return {...state, textFieldName : action.value};
  } else if (action.type === "TEXT_FIELD_CONTENT" && typeof action.value === 'string') {
    return {...state, textFieldContent : action.value};
  } else {
    throw new Error(`Unhandled : { action type: ${action.type}, action value: ${action.value} }`);
  } 
}

const ContextControllerProvider: FC = ({ children }) => {
  const initialState : State = {
    postId : 0,
    alertsMessage : '',
    toggleSuccessAlerts : false,
    toggleFailAlerts : false,
    toolButton : 'write',
    textFieldTitle : '',
    textFieldName : '',
    textFieldContent : '',
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return <MyContext.Provider value={[state, dispatch]}>{children}</MyContext.Provider>;
}

function useContextController() {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error(
      "useMaterialUIController should be used inside the MaterialUIControllerProvider."
    );
  }

  return context;
}

const setPostId = (dispatch : React.Dispatch<Action>, value : number) => dispatch({ type: "POST_ID", value});
const setAlertsMessage = (dispatch : React.Dispatch<Action>, value : string) => dispatch({ type: "ALERTS_MESSAGE", value});
const setToggleSuccessAlerts = (dispatch : React.Dispatch<Action>, value : boolean) => dispatch({ type: "TOGGLE_SUCCESS_ALERTS", value});
const setToggleFailAlerts = (dispatch : React.Dispatch<Action>, value : boolean) => dispatch({ type: "TOGGLE_FAIL_ALERTS", value});
const setToolButton = (dispatch : React.Dispatch<Action>, value : string) => dispatch({ type: "TOOL_BUTTON", value});
const setTextFieldTitle = (dispatch : React.Dispatch<Action>, value : string) => dispatch({ type: "TEXT_FIELD_TITLE", value});
const setTextFieldName = (dispatch : React.Dispatch<Action>, value : string) => dispatch({ type: "TEXT_FIELD_NAME", value});
const setTextFieldContent = (dispatch : React.Dispatch<Action>, value : string) => dispatch({ type: "TEXT_FIELD_CONTENT", value});

export {
  ContextControllerProvider,
  setPostId,
  useContextController,
  setToggleSuccessAlerts,
  setToggleFailAlerts,
  setAlertsMessage,
  setToolButton,
  setTextFieldTitle,
  setTextFieldName,
  setTextFieldContent,
  setDeletePostData,
  setAddPostData,
}