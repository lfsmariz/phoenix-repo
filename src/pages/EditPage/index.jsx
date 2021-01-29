import React from 'react'
import FormUser from '../../components/FormUser'

const EditPage = (props) => {

  const {match: {params: {userid}}} = props

  return (
    <div>
      <FormUser userid={userid}/>
    </div>
  )

}


export default EditPage