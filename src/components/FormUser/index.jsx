import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { UserDataSetter } from "../../redux/actions/userActions";

const FormUser = (props) => {
  const initForm = {
    name: "",
    email: "",
    password: "",
    birthdate: "",
    userType: "gerente",
  };
  const [form, setForm] = useState(initForm);

  const { addNewUser } = props;

  const history = useHistory();

  const handleChange = ({ target }) => {
    const { id, value } = target;

    setForm({ ...form, [id]: value });
  };

  return (
    <form action="">
      <label>
        Nome:
        <input
          value={form.name}
          type="text"
          id="name"
          onChange={handleChange}
        />
      </label>
      <label>
        email:
        <input
          value={form.email}
          type="email"
          id="email"
          onChange={handleChange}
        />
      </label>
      <label>
        Senha:
        <input
          value={form.password}
          type="password"
          id="password"
          onChange={handleChange}
        />
      </label>
      <label>
        Aniversário:
        <input
          value={form.birthdate}
          type="text"
          id="birthdate"
          onChange={handleChange}
        />
      </label>
      <label>
        Tipo:
        <select value={form.userType} id="userType" onChange={handleChange}>
          <option value="gerente">gerente</option>
          <option value="colaborador">colaborador</option>
          <option value="administrador">administrador</option>
        </select>
      </label>
      <button
        type="button"
        onClick={() => {
          addNewUser(form);
          history.push("/");
        }}
      >
        Adicionar
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addNewUser: ({ name, email, password, birthdate, userType }) =>
    dispatch(UserDataSetter(name, email, password, birthdate, userType)),
});

export default connect(null, mapDispatchToProps)(FormUser);
