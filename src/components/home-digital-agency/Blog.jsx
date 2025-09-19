import React from 'react';
import blogData from '../../data/blog-posts.json';

function Blog() {
  // Get the 3 most recent featured posts
  const featuredPosts = blogData.filter(post => post.featured).slice(0, 3);
  
  return (
    <section className="blog style2">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Latest Insights</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Expert <span className="fw-200">Articles.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="/blog-grid-3columns"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="row">
          {featuredPosts.map((post, index) => (
            <div key={post.id} className="col-lg-4">
              <div className={`item ${index < featuredPosts.length - 1 ? 'md-mb50' : ''}`}>
                <div className="info sub-title p-color d-flex align-items-center mb-20">
                  <div>
                    <a href="/blog-grid-3columns">By : {post.author}</a>
                  </div>
                  <div className="ml-30">
                    <a href="/blog-grid-3columns">{new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long', 
                      day: 'numeric'
                    })}</a>
                  </div>
                  <div className="ml-30">
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <div className="img fit-img">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="cont pt-30">
                  <div className="category-tag mb-10">
                    <span className="tag-sm p-color">{post.category}</span>
                  </div>
                  <h5>{post.title}</h5>
                  <p className="text-sm mt-15 opacity-8">{post.summary}</p>
                  <a
                    href="/blog-details"
                    className="butn-crev d-flex align-items-center mt-30"
                  >
                    <span className="hover-this">
                      <span className="circle hover-anim">
                        <i className="ti-arrow-top-right"></i>
                      </span>
                    </span>
                    <span className="text">Read more</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;