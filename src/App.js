import logo from "./logo.svg";
import "./App.css";
import Personer from "./components/Personer/Personer";
import Biler from "./components/Shared/Biler/Biler";
import Savings from "./components/Savings/Savings";
import Income from "./components/Shared/Income/Income";
import SubmitBtn from "./components/Shared/SubmitBtn/SubmitBtn";
import data from "./data";
import { useReducer, useState } from "react";

const reducer = (state, action) => {
  // ACTION TYPE FOR KIDS
  switch (action.type) {
    case "numberChange":
      return {
        ...state,
        numberOfChildren: {
          ...state.numberOfChildren,
          [action.marker]: state.numberOfChildren[action.marker] + 1,
          total: state.numberOfChildren.total + 1,
        },
      };
    case "numberDown":
      return {
        ...state,
        numberOfChildren: {
          ...state.numberOfChildren,
          [action.marker]: state.numberOfChildren[action.marker] - 1,
          total: state.numberOfChildren.total - 1,
        },
      };
    // ACTION TYPE FOR ADULTS
    case "adultPlus":
      return {
        ...state,
        personerData: {
          ...state.personerData,
          numberOfAdults: state.personerData.numberOfAdults + 1,
        },
      };
    case "adultMinus":
      return {
        ...state,
        personerData: {
          ...state.personerData,
          numberOfAdults: state.personerData.numberOfAdults - 1,
        },
      };
      default: return state
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, data);
  return (
    <div className="App">
      <div className="flex-item">
        <Personer data={state} dispatch={dispatch} />
      </div>
      <div className="flex-item">
        <Biler numberOfCars={state.personerData.numberOfCars} />
      </div>
      <div className="flex-item">
        <Savings savings={state.personerData.income} />
      </div>
      <div className="flex-item">
        <Income downPayment={state.personerData.downPayment} />
      </div>
      <div className="flex-item">
        <SubmitBtn />
      </div>
    </div>
  );
}

export default App;
