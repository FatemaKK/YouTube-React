import { Component } from "react";
// import Comments from "./Comments";

class CommentForm extends Component {
  constructor() {
    super();

    this.state = {
      commentInput: "",
      commenterName: "",
      comments: [],
    };
  }

  handleSubmit = (event) => {
    const { comments, commentInput, commenterName } = this.state;
    event.preventDefault();
    this.setState({
      comments: [
        ...comments,
        { name: commenterName, commentInput: commentInput },
      ],
      commenterName: "",
      commentInput: "",
    });
  };

  handleNameChange = (event) => {
    this.setState({
      commenterName: event.target.value,
    });
  };

  handleInputChange = (event) => {
    this.setState({
      commentInput: event.target.value,
    });
  };

  render() {
    const { comments } = this.state;

    const eachComment = comments.map((comment) => {
      return (
        <li>
          <h3>{comment.name} says:</h3>
          <p className="comment">{comment.commentInput}</p>
        </li>
      );
    });
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            className="Person-Name"
            type="text"
            value={this.state.commenterName}
            onChange={this.handleNameChange}
            placeholder="name"
            required
          />
          <input
            name="comment"
            className="comment-box"
            type="text"
            value={this.state.commentInput}
            onChange={this.handleInputChange}
            placeholder="comment something here..."
            required
          />
          <button type="submit">Comment</button>
        </form>
        <ul className="theComments">{eachComment}</ul>
      </div>
    );
  }
}

export default CommentForm;
