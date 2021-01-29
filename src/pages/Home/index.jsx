import React from 'react'
import { connect } from 'react-redux'
import CardUser from '../../components/CardUser'

const Home = (props) => {
  const { userList } = props

  return (
    <div>
      {userList.map(({ id, name, email, birthdate, userType }) => (
        <CardUser name={name} email={email} birthdate={birthdate} userType={userType} id={id} />
      ))}
    </div>
  )

}

const mapStateToProps = (state) => ({
  userList: state.user.users
})

export default connect(mapStateToProps)(Home)