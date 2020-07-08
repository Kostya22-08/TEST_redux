import React from "react";

const Comments = React.createClass({
  renderComment(comment, i, commentId) {
    return (
      <figure key={i}>
        <div className="comment">
          <p>
            <strong>{comment.user}</strong>
          </p>
          <figcaption>
            {comment.text}
            <div className="control-buttons">
              <button
                onClick={this.props.increment.bind(commentId)}
                className="like"
              >
                &hearts;{comment.likes}
              </button>
            </div>
          </figcaption>
        </div>
      </figure>
    );
  },
  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
      </div>
    );
  },
});

export default Comments;
