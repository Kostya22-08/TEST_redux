import React from "react";
//
// const Comments = React.createClass({
//   renderComment(comment, i, commentId) {
//     return (
//       <figure key={i}>
//         <div className="comment">
//           <p>
//             <strong>{comment.user}</strong>
//           </p>
//           <figcaption>
//             {comment.text}
//             <div className="control-buttons">
//               <button
//                 onClick={this.props.increment.bind(commentId)}
//                 className="like"
//               >
//                 &hearts;{comment.likes}
//               </button>
//             </div>
//           </figcaption>
//         </div>
//       </figure>
//     );
//   },
//   render() {
//     return (
//       <div className="comments">
//         {this.props.postComments.map(this.renderComment)}
//       </div>
//     );
//   },
// });

function Comments(props) {
  return(
      <figure key={props.index}>
        <div className="comment">
          <p>
            <strong>{props.comment.user}</strong>
          </p>
          <figcaption>
            {props.comment.text}
            <div className="control-buttons">
              <button
                  onClick={props.increment.bind(null, props.index)}
                  className="like"
              >
                &hearts;{props.comment.likes}
              </button>
              <div>
                {props.comment.replies && props.comment.replies.map((replie) => (
                    <p key={replie.text}>{replie.text}</p>
                ))}
              </div>
            </div>
          </figcaption>
        </div>
      </figure>
  );
}

export default Comments;
//
// class Comment extend React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {};
//
//     this.onClick = this.onClick.bind(this);
//   }
//
//   onClick() {
//
//   }
//
//   render() {
//     return(
//         <>
//         <p>adasdasd</p>
//           <button onClick={this.onClick}>asdasd</button>
//         </>
//     )
//   }
// }
