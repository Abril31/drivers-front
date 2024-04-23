import {
  CLEAN_DRIVER,
  FILTER_BY_ORIGIN,
  FILTER_BY_TEAM,
  GET_ALL_TEAMS,
  GET_DRIVERS,
  GET_DRIVER_BY_ID,
  ORDER,
  ORDER_BY_DOB,
  ORDER_REVERSE_BY_DOB,
  RESET,
  REVERSE,
  SEARCH_DRIVER,
} from "./action-types";
import axios from "axios";
export const getDrivers = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("/drivers");
      const drivers = response.data;
      dispatch({
        type: GET_DRIVERS,
        payload: drivers,
      });
    } catch (error) {
      alert("There was a problem. " + error.message);
    }
  };
};
export const getDriver = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/drivers/${id}`);
      const driver = response.data;
      dispatch({
        type: GET_DRIVER_BY_ID,
        payload: driver,
      });
    } catch (error) {
      alert("Driver not found. " + error.message);
    }
  };
};
export const searchDriver = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/drivers?name=${name}`);
      const getDriverByName = response.data;
      dispatch({
        type: SEARCH_DRIVER,
        payload: getDriverByName,
      });
    } catch (error) {
      alert(
        "Driver not found 😥, please try a different name... " + error.message
      );
    }
  };
};

export const getTeams = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("/teams");
      const dataTeams = response.data;
      dispatch({
        type: GET_ALL_TEAMS,
        payload: dataTeams,
      });
    } catch (error) {
      alert("There a was a problem. " + error.message);
    }
  };
};
export const filterTeam = (teamSelected) => {
  //Valor de option
  return async function (dispatch) {
    try {
      dispatch({
        type: FILTER_BY_TEAM,
        payload: teamSelected,
      });
    } catch (error) {
      alert("Something went wrong. " + error.message);
    }
  };
};
export const cleanDriver = () => {
  return { type: CLEAN_DRIVER };
};
export const postDriver = (state) => {
  return async function () {
    try {
      const response = await axios.post("/drivers", state);
      const createDriver = response.data;
      return createDriver;
    } catch (error) {
      alert("Sorry, an error occurred. " + error.message);
    }
  };
};
export const orderDrivers = () => {
  return { type: ORDER };
};
export const orderReverseDrivers = () => {
  return { type: REVERSE };
};
export const orderByDob = () => {
  return { type: ORDER_BY_DOB };
};
export const orderReverseByDob = () => {
  return { type: ORDER_REVERSE_BY_DOB };
};
export const filterBySource = (source) => {
  return { type: FILTER_BY_ORIGIN, payload: source };
};
export const restart = () => {
  return async function (dispatch) {
    try {
      dispatch({
        type: RESET,
      });
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };
};
