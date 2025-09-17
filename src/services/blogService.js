const API_BASE = process.env.NODE_ENV === 'production' 
  ? 'https://jesspf.vercel.app/api' 
  : '/api';

class BlogService {
  async fetchPosts() {
    try {
      const response = await fetch(`${API_BASE}/posts`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  }

  async fetchPostBySlug(slug) {
    try {
      const response = await fetch(`${API_BASE}/posts?slug=${encodeURIComponent(slug)}`);
      if (!response.ok) {
        if (response.status === 404) {
          return null;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching post by slug:', error);
      throw error;
    }
  }
}

const blogService = new BlogService();
export default blogService;