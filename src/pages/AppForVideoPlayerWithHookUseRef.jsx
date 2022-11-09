import VideoPlayerWithHookUseRef from '../Hooks/VideoPlayerWithHookUseRef';
import Button from '../Stylization/Button';
import { NavLink } from "react-router-dom";


const AppForVideoPlayerWithHookUseRef = () => {
  return <>
    <Button><NavLink to="/conspectus-react">Go back</NavLink></Button>
    <VideoPlayerWithHookUseRef source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
  </>;
};


export default AppForVideoPlayerWithHookUseRef;