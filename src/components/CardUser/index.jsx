import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserDataRemove } from '../../redux/actions/userActions';

const CardUser = (props) => {
  const { name, email, birthdate, userType, id, removeUser } = props

  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <p>{birthdate}</p>
      <p>{userType}</p>
      <button type="button" onClick={() => removeUser(id)}>Remover Usuário</button>
      <Link to={`/edit-form/${id}`}>
        <button type="button">Editar Usuário</button>
      </Link>
    </div>
  )

}

const mapDispatchToProps = (dispatch) => ({
  removeUser: (id) =>
    dispatch(UserDataRemove (id)),
});

export default connect(null, mapDispatchToProps)(CardUser)