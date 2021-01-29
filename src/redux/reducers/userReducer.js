import mockUser from "../../mocks/mockUser";
import { EDIT_USER_DATA, REMOVE_USER_DATA, SET_USER_DATA } from "../actions/userActions";

const initialState = { users: mockUser, counter: 3 };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: state.counter,
            name: action.name,
            email: action.email,
            password: action.password,
            birthdate: action.birthdate,
            userType: action.userType,
          },
        ],
        counter: state.counter + 1,
      };

    case REMOVE_USER_DATA:
      return {
        ...state,
        users: state.users.filter((elem) => elem.id !== action.id),
      };

    case EDIT_USER_DATA:
      return {
        ...state,
        users: [
          ...state.users.filter((elem) => elem.id !== action.id),
          {
            id: action.id,
            name: action.name,
            email: action.email,
            password: action.password,
            birthdate: action.birthdate,
            userType: action.userType,
          },
        ],
      };

    default:
      return state;
  }
};

export default userReducer;
