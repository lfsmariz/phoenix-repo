import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CardUser from '../../components/CardUser'

const Home = (props) => {
  const { userList } = props

  return (
    <div>
      {userList.map(({ id, name, email, birthdate, userType }) => (
        <CardUser name={name} email={email} birthdate={birthdate} userType={userType} id={id} />
      ))}
      <Link to="/form">
      <button type="button">Adicionar Usuário</button>
      </Link>
    </div>
  )

}

const mapStateToProps = (state) => ({
  userList: state.user.users
})

export default connect(mapStateToProps)(Home)