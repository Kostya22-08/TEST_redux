import React from "react";
import Photo from "./Photo";
import Comments from "./Comments";

const Single = React.createClass({
  render() {
    const { postId } = this.props.params;
    const i = this.props.posts.findIndex(post => post.code === postId);
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];
    return (
      <div className="single">
        <Photo i={i} post={post} {...this.props} />
        {post.text}
        <div className="comments">
          {this.props.comments.map((comment, index) => (
            <Comments postComments={postComments} index={index} comment={comment} {...this.props} />
          ))}
        </div>
      </div>
    );
  }
});

export default Single;
