import { useParams } from "react-router-dom";
import CommentForm from "./CommentForm";
// import YouTube from "react-youtube";

const Video = (props) => {
  const { id } = useParams();

  const videoSrc = `https://www.youtube.com/embed/${id}`;
    return (
        <div>
        <iframe src={videoSrc} title="Video" allowFullScreen />
        {/* <YouTube videoId={this.props.match.params.id}/> */}
        <br></br>
        <h3>Comment Form</h3>
        <CommentForm />
        </div>
    );
};

export default Video;