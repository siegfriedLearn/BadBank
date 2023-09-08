import { useContext } from 'react';
import { UserContext } from '../main'


export const AllData = () => {

  const user = useContext(UserContext);

  return (
    <div>AllData {user.name}</div>
  )
}
