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

let initialState = {
  drivers: [],
  copyDrivers: [],
  driver: [],
  allTeams: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        drivers: action.payload,
        copyDrivers: action.payload,
      };
    case GET_DRIVER_BY_ID:
      return {
        ...state,
        driver: action.payload,
      };
    case CLEAN_DRIVER:
      return {
        ...state,
        driver: [],
      };
    case SEARCH_DRIVER:
      return {
        ...state,
        drivers: action.payload,
      };
    case GET_ALL_TEAMS:
      return {
        ...state,
        allTeams: action.payload,
      };
    case FILTER_BY_TEAM:
      const teamFilter = action.payload;
      const filteredTeams = state.drivers.filter(
        (driver) => driver.teams && driver.teams.includes(teamFilter)
      );
      return {
        ...state,
        drivers: [...filteredTeams],
      };

    case ORDER:
      const sorted = state.drivers.sort((a, b) => {
        const nameA = a.forename.toLowerCase();
        const nameB = b.forename.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        else return 0;
      });
      return {
        ...state,
        drivers: [...sorted],
      };
    case REVERSE:
      const sortedZA = state.drivers.sort((a, b) => {
        const nameA = a.forename.toLowerCase();
        const nameB = b.forename.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        else return 0;
      });
      return {
        ...state,
        drivers: [...sortedZA].reverse(),
      };
    case ORDER_BY_DOB:
      const orderedDob = (a, b) => {
        const dateA = new Date(a.dob);
        const dateB = new Date(b.dob);
        return dateA - dateB;
      };
      return {
        ...state,
        drivers: [...state.drivers.sort(orderedDob)],
      };
    case ORDER_REVERSE_BY_DOB:
      const orderedReverseDob = (a, b) => {
        const dateA = new Date(a.dob);
        const dateB = new Date(b.dob);
        return dateB - dateA;
      };
      return {
        ...state,
        drivers: [...state.drivers.sort(orderedReverseDob)],
      };
    case FILTER_BY_ORIGIN:
      if (action.payload === "Api") {
        const apiDrivers = state.copyDrivers.filter(
          (driver) => !driver.created
        );
        return { ...state, drivers: [...apiDrivers] };
      } else if (action.payload === "Database") {
        const databaseDrivers = state.copyDrivers.filter(
          (driver) => driver.created
        );
        return { ...state, drivers: [...databaseDrivers] };
      } else if (action.payload === "All") {
        return { ...state, drivers: [...state.copyDrivers] };
      } else {
        return { ...state, drivers: [...state.drivers] };
      }

    case RESET:
      return {
        ...state,
        drivers: [...state.copyDrivers],
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
