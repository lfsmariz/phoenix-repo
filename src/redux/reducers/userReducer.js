import mockUser from '../../mocks/mockUser';
import { SET_USER_DATA } from '../actions/userActions';

const initialState = { users: mockUser, counter: 3};

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
        }
      ],
      counter: state.counter + 1 
    };
  default:
    return state;
  }
};

export default userReducer;
