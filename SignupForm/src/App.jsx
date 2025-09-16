import { useReducer } from "react";
import "./App.css";

const initialState = {
  form: {
    name: "",
    email: "",
    password: "",
  },
  errors: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_FIELD":
      return {
        ...state,
        form: { ...state.form, [action.field]: action.value },
      };
    case "SET_ERRORS":
      return { ...state, errors: action.errors };
    case "RESET_FORM":
      return { ...initialState };
    default:
      return state;
  }
}

const validate = (form) => {
  const errors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.email.trim()) errors.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(form.email)) errors.email = "Email is invalid";
  if (!form.password) errors.password = "Password is required";
  else if (form.password.length < 6)
    errors.password = "Password must be at least 6 characters";
  return errors;
};

function SignupFormReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE_FIELD", field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(state.form);
    dispatch({ type: "SET_ERRORS", errors: validationErrors });

    if (Object.keys(validationErrors).length === 0) {
      alert("Signup Successful!");
      console.log(state.form);
      dispatch({ type: "RESET_FORM" });
    }
  };

  return (
    <div>
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={state.form.name}
            onChange={handleChange}
          />
          {state.errors.name && (
            <p style={{ color: "red" }}>{state.errors.name}</p>
          )}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={state.form.email}
            onChange={handleChange}
          />
          {state.errors.email && (
            <p style={{ color: "red" }}>{state.errors.email}</p>
          )}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={state.form.password}
            onChange={handleChange}
          />
          {state.errors.password && (
            <p style={{ color: "red" }}>{state.errors.password}</p>
          )}
        </div>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

function App() {
  return <SignupFormReducer />;
}

export default App;

