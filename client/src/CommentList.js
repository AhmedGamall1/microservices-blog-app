const CommentList = ({ comments }) => {
  const renderdComments = comments.map((comment) => (
    <li key={comment.id}>{comment.content}</li>
  ));
  return <ul>{renderdComments}</ul>;
};

export default CommentList;
