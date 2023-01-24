import { ChangeProfile } from "../components/ChangeProfile";
export const Profile = (props) => {
  return (
    <div className="App">
      {""}
      <div>PROFILE, user is: {props.username}</div>
      <ChangeProfile setUsername={props.setUsername} />
    </div>
  );
};
