import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  let {name, image, about, posts} = blogData
  console.log(name, image, about, posts);
  return (
    <div className="App">
    <Header name = {name} />
    <About image = {image} about = {about} />
    <ArticleList posts={posts} />
    </div>
  );
}

export default App;