import React from 'react'
import { useParams } from 'react-router'

const Blogs = ({ history }) => {
    const params = useParams()
    console.log(params)
  return (
    <div>Blogs</div>
  )
}

export default Blogs