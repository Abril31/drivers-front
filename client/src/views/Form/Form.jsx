import "./Form.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validate } from "../../helpers/validate";
import { getTeams, postDriver } from "../../Redux/actions";

const Form = () => {
  const dispatch = useDispatch();
  const allTeams = useSelector((state) => state.allTeams);
  useEffect(() => {
    dispatch(getTeams());
  }, []);
  const [state, setState] = useState({
    forename: "",
    surname: "",
    description: "",
    image: "",
    nationality: "",
    dob: "",
    teams: [],
  });
  const [errors, setErrors] = useState({
    forename: "*Required",
    surname: "*Required",
    description: "*Required",
    image: "",
    nationality: "*Required",
    dob: "*Required",
    teams: "*Choose at least 1 team",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // Manejo los cambios en el form
    if (name !== "teams") {
      setState({
        ...state,
        [name]: value,
      });
    } else {
      // Evitar que se pise en teams
      if (!state.teams.includes(value)) {
        //Evito agregar repetidos y creo una nueva copia del array
        let newTeams = [...state.teams, value];
        setState({
          ...state,
          teams: newTeams,
        });
      }
    }
    const newErrors = validate({ ...state, [name]: value }, name);
    setErrors({ ...errors, ...newErrors });
  };
  const disabledButton = () => {
    for (let error in errors) {
      if (errors[error] !== "") return true;
    }
    return false;
  };

  //Elimina el team agregado.
  const remove = (teamToRemove) => {
    let newTeams = state.teams.filter((team) => team !== teamToRemove); //
    setState({
      ...state,
      teams: newTeams,
    });
    const newErrors = validate({ ...state, teams: newTeams }, "teams");
    setErrors({ ...errors, ...newErrors });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postDriver(state))
      .then(() => alert("Driver created successfully 🏁!"))
      .catch((error) => {
        alert("There was a problem 😥, try again, please.");
      });
  };
  return (
    <div className="main-form-cont">
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Time to create your driver!</h2>
        <br />
        <label className="form-text">Name</label>
        <input onChange={handleChange} type="text" name="forename" />
        <p className="error">{errors.forename}</p>
        <label className="form-text">Lastname</label>
        <input onChange={handleChange} type="text" name="surname" />
        <p className="error">{errors.surname}</p>
        <label className="form-text">Birth Date</label>
        <input onChange={handleChange} type="date" name="dob" />
        <p className="error">{errors.dob}</p>
        <label className="form-text">Nationality</label>
        <input onChange={handleChange} type="text" name="nationality" />
        <p className="error">{errors.nationality}</p>

        <label className="form-text">Description</label>
        <textarea
          onChange={handleChange}
          type="text"
          name="description"
          rows="5"
          cols="50"
        />
        <p className="error">{errors.description}</p>
        <label className="form-text">Image</label>
        <input
          onChange={handleChange}
          type="text"
          name="image"
          placeholder="Optional..."
        />

        <label className="form-text">Teams</label>
        <select onChange={handleChange} name="teams">
          {allTeams.map((team) => (
            <option value={team} key={team}>
              {team}
            </option>
          ))}
        </select>

        <p className="error">{errors.teams}</p>
        {state.teams.map((team) => (
          <div key={team}>
            <span> {team} </span>

            <button
              className="btn-remove"
              onClick={() => {
                remove(team);
              }}
            >
              x
            </button>
          </div>
        ))}

        <div>
          <button
            className="btn-submit"
            type="submit"
            disabled={disabledButton()}
          >
            Create your Driver!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
