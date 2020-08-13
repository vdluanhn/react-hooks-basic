import React from "react";
import PropTypes from "prop-types";

function PostList(props) {
  const { posts } = props;
  return (
    <ul className="post-list">
      {posts.map((item) => (
        <p
          style={{
            height: 30,
            backgroundColor: "grey",
            margin: 5,
            color: "white",
          }}
          key={item.id}
        >
          {item.title}
        </p>
      ))}
    </ul>
  );
}

PostList.propTypes = {
  posts: PropTypes.array,
};
PostList.defaultProps = {
  posts: [],
};

export default PostList;
