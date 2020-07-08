export function increment(commentId) {
  return {
    type: "INCREMENT_LIKES",
    commentId
  };
}
