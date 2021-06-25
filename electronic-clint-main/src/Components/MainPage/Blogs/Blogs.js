import React from 'react';
import cable from '../../../Image_Icon/Image/4.jpg'
import monitor from '../../../Image_Icon/Image/3.jpg'
import laptop from '../../../Image_Icon/Image/2.jpg'
import BlogsDetails from './BlogsDetails';

const blogsData = [
  {
    id: 1,
    title: "How to choose a product",
    date: "april 2021",
    category: "Chip Transparent",
    posted: "posted by nayem",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sed labore maxime mollitia repudiandae aliquam ad sequi ipsam odio accusamus.",
    img: cable,

  },
  {
    id: 2,
    title: "How to choose a product",
    category: "Vod - Free electron",
    posted: "posted by nayem",
    post: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem optio maiores reiciendis repudiandae unde quam aliquid magnam delectus magni voluptatem.",
    img: monitor,

  },
  {
    id: 3,
    title: "How to choose a product",
    category: "Computer Processor",
    posted: "posted by nayem",
    post: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet optio debitis fuga explicabo pariatur voluptas cupiditate amet laudantium ipsum laborum.",
    img: laptop,

  }
];
const Blogs = () => {
  return (
    <section className="container text-center mt-5">
      <h2 className="text-brand">BLOGS</h2>
      <div className="row">
        {
          blogsData.map(blog => <BlogsDetails key={'id'} blog={blog}></BlogsDetails>)
        }
      </div>
    </section>
  );
};

export default Blogs;