import { ChangeProfile } from "../components/ChangeProfile";
import {useContext} from 'react';
import {AppContext} from '../App';
export const Profile = () => {
  const {username} = useContext(AppContext);
  return (
    <div className="App">
      {""}
      <div>PROFILE, user is: {username}</div>
      <ChangeProfile />
    </div>
  );
};
