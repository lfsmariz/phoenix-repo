import React from 'react'

const CardUser = (props) => {
  const { name, email, birthdate, userType } = props

  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <p>{birthdate}</p>
      <p>{userType}</p>
    </div>
  )

}

export default CardUser