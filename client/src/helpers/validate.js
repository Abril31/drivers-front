export const validate = (state, name) => {
  const newErrors = { ...state.errors }; // Hacemos una copia de los errores existentes

  if (name === "forename") {
    if (state.forename === "") {
      newErrors.forename = "*Name is required";
    } else if (state.forename.length > 25 || state.forename.length < 3) {
      newErrors.forename = "Name should be between 3 and 25 characters";
    } else if (!/^[a-zA-Z-ñ\s]+$/.test(state.forename)) {
      newErrors.forename = "Name should only contain letters and spaces";
    } else {
      newErrors.forename = "";
    }
  }

  if (name === "surname") {
    if (state.surname === "") {
      newErrors.surname = "*Lastname is required";
    } else if (state.surname.length > 40 || state.surname.length < 3) {
      newErrors.surname = "Lastname should be between 3 and 40 characters";
    } else if (!/^[a-zA-Z-ñ\s]+$/.test(state.surname)) {
      newErrors.surname = "Lastname should only contain letters and spaces";
    } else {
      newErrors.surname = "";
    }
  }

  if (name === "description") {
    if (state.description === "") {
      newErrors.description = "*Description is required";
    } else if (
      state.description.length < 30 ||
      state.description.length > 150
    ) {
      newErrors.description =
        "Description shouldn't have more than 120 characters";
    } else {
      newErrors.description = "";
    }
  }
  if (name === "nationality") {
    if (state.nationality === "") {
      newErrors.nationality = "*Nationality is required";
    } else if (state.nationality.length < 4 || state.nationality.length > 10) {
      newErrors.nationality =
        "Nationality should be between 4 and 10 characters";
    } else if (!/^[a-zA-Z-ñ\s]+$/.test(state.nationality)) {
      newErrors.nationality =
        "Nationality should only contain letters and spaces";
    } else {
      newErrors.nationality = "";
    }
  }

  if (name === "dob") {
    if (state.dob === "") {
      newErrors.dob = "*Date of birth is required";
    } else {
      //Manejo min y max de edades
      const dob = new Date(state.dob);
      const eighteenYearsAgo = new Date();
      eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18); //2005
      const eightyYearsAgo = new Date();
      eightyYearsAgo.setFullYear(eightyYearsAgo.getFullYear() - 80);

      if (dob > eighteenYearsAgo || dob < eightyYearsAgo) {
        newErrors.dob = "Must be between 18 and 80 years old"; //1943
      } else {
        newErrors.dob = "";
      }
    }
  }
  if (name === "teams") {
    if (state.teams.length === 0) {
      newErrors.teams = "*Choose at least 1 team";
    } else {
      newErrors.teams = "";
    }
  }

  return newErrors;
};
