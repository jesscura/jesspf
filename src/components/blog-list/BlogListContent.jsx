import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogService from '../../services/blogService';

function BlogListContent() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const fetchedPosts = await blogService.fetchPosts();
        setPosts(fetchedPosts);
      } catch (err) {
        setError('Failed to load blog posts. Please try again later.');
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section className="blog section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="loading-spinner">
                <p>Loading blog posts...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="blog section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="error-message">
                <h4>Oops!</h4>
                <p>{error}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="blog section-padding">
      <div className="container">
        <div className="row">
          {posts.length === 0 ? (
            <div className="col-12 text-center">
              <h4>No blog posts found.</h4>
              <p>Check back soon for new content!</p>
            </div>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6 mb-50">
                <div className="item">
                  {post.coverImage && (
                    <div className="img">
                      <img 
                        src={post.coverImage.url} 
                        alt={post.coverImage.title || post.title}
                        style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                      />
                    </div>
                  )}
                  <div className="cont pt-30">
                    <div className="info sub-title p-color d-flex align-items-center mb-20">
                      <div>
                        <span>By: Admin</span>
                      </div>
                      <div className="ml-30">
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                    </div>
                    <h5>
                      <Link to={`/blog/${post.slug}`} className="text-decoration-none">
                        {post.title}
                      </Link>
                    </h5>
                    {post.excerpt && (
                      <p className="mt-20 p-color">
                        {post.excerpt}
                      </p>
                    )}
                    <Link
                      to={`/blog/${post.slug}`}
                      className="butn-crev d-flex align-items-center mt-30"
                    >
                      <span className="hover-this">
                        <span className="circle hover-anim">
                          <i className="ti-arrow-top-right"></i>
                        </span>
                      </span>
                      <span className="text">Read more</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default BlogListContent;