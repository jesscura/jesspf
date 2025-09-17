import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import blogService from '../../services/blogService';

function BlogDetailHeader() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const fetchedPost = await blogService.fetchPostBySlug(slug);
        if (!fetchedPost) {
          setNotFound(true);
        } else {
          setPost(fetchedPost);
        }
      } catch (err) {
        console.error('Error fetching post:', err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

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
      <section className="page-header section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="cont text-center">
                <p>Loading...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (notFound) {
    return <Navigate to="/page-404" replace />;
  }

  return (
    <section className="page-header blog-header section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont text-center">
              <h1 className="d-rotate wow">
                <span className="rotate-text">{post.title}</span>
              </h1>
              <div className="info sub-title p-color d-flex align-items-center justify-content-center mt-30">
                <div>
                  <span>By: Admin</span>
                </div>
                <div className="ml-30">
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
              </div>
              <div className="path mt-20">
                <a href="/" className="main-color">
                  Home
                </a>
                <span className="main-color">/</span>
                <a href="/blog" className="main-color">
                  Blog
                </a>
                <span className="main-color">/</span>
                <span>{post.title}</span>
              </div>
            </div>
          </div>
        </div>
        {post.coverImage && (
          <div className="row mt-80">
            <div className="col-12">
              <div className="img fit-img">
                <img 
                  src={post.coverImage.url} 
                  alt={post.coverImage.title || post.title}
                  style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default BlogDetailHeader;