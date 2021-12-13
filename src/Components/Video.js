import { useParams } from "react-router-dom";
import CommentForm from "./CommentForm";
import "./Video.css";
// import YouTube from "react-youtube";

const Video = (props) => {
  const { id } = useParams();

  const videoSrc = `https://www.youtube.com/embed/${id}`;
    return (
      <>
        <div>
          <iframe className="videoCard" src={videoSrc} title="Video" allowFullScreen />
          {/* <YouTube videoId={this.props.match.params.id}/> */}
        </div>
        <br></br>
        <div className="commentForm">
          <h3>Comment Form</h3>
          <CommentForm />
        </div>
      </>
    );
};

export default Video;