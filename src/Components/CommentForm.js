import { Component } from "react";

class CommentForm extends Component {
  render() {
    return (
      <div>
        <input className="Person-Name" type="text" placeholder="name" />
        <input
          className="comment-box"
          type="text"
          placeholder="comment something here..."
        />
        <button type="submit">Comment</button>
      </div>
    );
  }
}

export default CommentForm;
