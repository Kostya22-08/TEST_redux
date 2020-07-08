import React from "react";
import Photo from "./Photo";

const PostsGrid = React.createClass({
  render() {
    return (
      <div className="posts-grid">
        {this.props.posts.map((post, i) => (
          <Photo {...this.props} key={i} i={i} post={post} />
        ))}
      </div>
    );
  }
});

export default PostsGrid;
