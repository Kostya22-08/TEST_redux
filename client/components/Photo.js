import React from "react";
import { Link } from "react-router";

const Photo = React.createClass({
  render() {
    const { post, i, comments } = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            {post.date}
            <img
              src={post.display_src}
              alt={post.alt}
              className="grid-photo"
            ></img>
          </Link>
        </div>
        <figcaption>
          <p>{post.caption}</p>
        </figcaption>
      </figure>
    );
  }
});

export default Photo;
