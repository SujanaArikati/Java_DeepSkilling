
import React from 'react';

class Post {
  constructor(id, title, body) {
    this.id = id;
    this.title = title;
    this.body = body;
  }
}

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        const postList = data.map(p => new Post(p.id, p.title, p.body));
        this.setState({ posts: postList });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert('Something went wrong: ' + error.message);
  }

  render() {
    if (this.state.error) {
      return <h3>Error: {this.state.error.message}</h3>;
    }

    return (
      <div>
        <h2>Blog Posts</h2>
        {this.state.posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
