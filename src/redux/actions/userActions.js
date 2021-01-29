export const SET_USER_DATA = "SET_USER_DATA";
export const REMOVE_USER_DATA = "REMOVE_USER_DATA";
export const EDIT_USER_DATA = "EDIT_USER_DATA";

export const UserDataSetter = (name, email, password, birthdate, userType) => ({
  type: SET_USER_DATA,
  name,
  email,
  password,
  birthdate,
  userType,
});

export const UserDataRemove = (id) => ({
  type: REMOVE_USER_DATA,
  id,
});

export const UserDataEdit = (
  id,
  name,
  email,
  password,
  birthdate,
  userType
) => ({
  type: EDIT_USER_DATA,
  id,
  name,
  email,
  password,
  birthdate,
  userType,
});
