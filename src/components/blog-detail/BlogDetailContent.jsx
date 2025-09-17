import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import blogService from '../../services/blogService';

const richTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-20">{children}</p>,
    [BLOCKS.HEADING_1]: (node, children) => <h1 className="mb-30 mt-40">{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2 className="mb-30 mt-40">{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3 className="mb-20 mt-30">{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4 className="mb-20 mt-30">{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5 className="mb-15 mt-25">{children}</h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6 className="mb-15 mt-25">{children}</h6>,
    [BLOCKS.UL_LIST]: (node, children) => <ul className="rest mb-30">{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol className="rest mb-30">{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li className="mb-10">{children}</li>,
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="quote-post mb-30 mt-30">
        <div className="text">
          <div className="icon">
            <span className="ti-quote-left"></span>
          </div>
          <div className="cont">
            {children}
          </div>
        </div>
      </blockquote>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, description, file } = node.data.target.fields;
      return (
        <div className="img mb-30 mt-30">
          <img 
            src={file.url} 
            alt={title || description || 'Blog image'}
            style={{ width: '100%', height: 'auto' }}
          />
          {(title || description) && (
            <p className="text-center mt-10 p-color fz-12">{title || description}</p>
          )}
        </div>
      );
    },
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data;
      const isExternal = uri.startsWith('http');
      return isExternal ? (
        <a href={uri} target="_blank" rel="noopener noreferrer" className="main-color">
          {children}
        </a>
      ) : (
        <a href={uri} className="main-color">
          {children}
        </a>
      );
    },
  },
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    [MARKS.CODE]: (text) => <code className="code-inline">{text}</code>,
  },
};

function BlogDetailContent() {
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

  if (loading) {
    return (
      <section className="blog-details section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <p>Loading...</p>
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
    <section className="blog-details section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="main-post">
              <div className="item">
                <div className="cont">
                  <div className="text">
                    {post.body ? (
                      documentToReactComponents(post.body, richTextOptions)
                    ) : (
                      <p>No content available.</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="blog-share d-flex align-items-center mt-80">
                <div className="mr-50">
                  <h6 className="fz-16">Share :</h6>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a 
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>

              <div className="next-prv-post d-flex align-items-center mt-80">
                <div className="prev">
                  <Link to="/blog">
                    <span className="sub-title mb-15">
                      <i className="ti-arrow-left mr-10"></i> Back to Blog
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="sidebar md-mb50">
              <div className="widget search">
                <div className="form">
                  <input type="text" placeholder="Search" />
                  <button>
                    <i className="ti-search"></i>
                  </button>
                </div>
              </div>
              
              <div className="widget categs">
                <h6 className="title-widget">Categories</h6>
                <ul className="rest">
                  <li>
                    <span>
                      <Link to="/blog">All Posts</Link>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="widget tags">
                <h6 className="title-widget">Tags</h6>
                <div>
                  <Link to="/blog">Blog</Link>
                  <Link to="/blog">Article</Link>
                  <Link to="/blog">Post</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogDetailContent;