import {useContext, useEffect} from 'react'
import { PostContext } from '../context/post.context'
const CloseSessionPage = () => {

  const {closeSession}=useContext(PostContext)

  useEffect(() => {
    closeSession()
  },[closeSession])


  return (
      <h2>Logging out...</h2>

    )
}

export default CloseSessionPage