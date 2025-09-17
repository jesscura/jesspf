import React from 'react';

function BlogListHeader() {
  return (
    <section className="page-header blog-header section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont text-center">
              <h1 className="d-rotate wow">
                <span className="rotate-text">Our Blog</span>
              </h1>
              <div className="path">
                <a href="/" className="main-color">
                  Home
                </a>
                <span className="main-color">/</span>
                <span>Blog</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-marq lrg">
        <div className="slide-har st1">
          <div className="box">
            <div className="item">
              <h4 className="d-flex align-items-center">
                <span>Our Blog</span>
                <span className="fz-50 ml-50 stroke icon">*</span>
              </h4>
            </div>
            <div className="item">
              <h4 className="d-flex align-items-center">
                <span>Latest Posts</span>
                <span className="fz-50 ml-50 stroke icon">*</span>
              </h4>
            </div>
            <div className="item">
              <h4 className="d-flex align-items-center">
                <span>Our Blog</span>
                <span className="fz-50 ml-50 stroke icon">*</span>
              </h4>
            </div>
            <div className="item">
              <h4 className="d-flex align-items-center">
                <span>Latest Posts</span>
                <span className="fz-50 ml-50 stroke icon">*</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogListHeader;