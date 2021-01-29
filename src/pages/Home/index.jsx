import React from 'react'
import { connect } from 'react-redux'

const Home = (props) => {
  const { userList } = props

  return (
    <div>
      {userList.map(({name}) => <p>{name}</p>)}
    </div>
  )

}

const mapStateToProps = (state) => ({
  userList: state.user.users
})

export default connect(mapStateToProps)(Home)