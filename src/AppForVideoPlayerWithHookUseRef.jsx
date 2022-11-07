import VideoPlayerWithHookUseRef from './Hooks/VideoPlayerWithHookUseRef';
import Button from './Stylization/Button';


const AppForVideoPlayerWithHookUseRef = () => {
  return <>
    <Button><a href="http://localhost:3000/conspectus-react">Go back</a></Button>
    <VideoPlayerWithHookUseRef source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
  </>;
};


export default AppForVideoPlayerWithHookUseRef;