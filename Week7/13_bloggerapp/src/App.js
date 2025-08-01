import React from 'react';
import './App.css';

function App() {
  const courses = [
    { id: 1, name: "Angular", date: "4/5/2025" },
    { id: 2, name: "React", date: "6/3/2025" }
  ];

  const books = [
    { id: 1, bname: "Master React", price: 670 },
    { id: 2, bname: "Deep Dive into Angular 11", price: 800 },
    { id: 3, bname: "Mongo Essentials", price: 450 }
  ];

  const blogs = [
    {
      id: 1,
      title: "React Learning",
      author: "Stephen Biz",
      content: "Welcome to learning React!"
    },
    {
      id: 2,
      title: "Installation",
      author: "Schwezdenier",
      content: "You can install React from npm."
    }
  ];

  return (
    <div className="container">
      {/* Course Details */}
      <div className="column">
        <h2>Course Details</h2>
        {courses.map(course => (
          <div key={course.id}>
            <h3>{course.name}</h3>
            <p>{course.date}</p>
          </div>
        ))}
      </div>

      {/* Book Details */}
      <div className="column">
        <h2>Book Details</h2>
        {books.map(book => (
          <div key={book.id}>
            <h3>{book.bname}</h3>
            <h4>{book.price}</h4>
          </div>
        ))}
      </div>

      {/* Blog Details */}
      <div className="column">
        <h2>Blog Details</h2>
        {blogs.map(blog => (
          <div key={blog.id}>
            <h3>{blog.title}</h3>
            <p><strong>{blog.author}</strong></p>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

