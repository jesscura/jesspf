const { createClient } = require('contentful');

// Initialize Contentful client
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { slug } = req.query;

    if (slug) {
      // Get specific post by slug
      const entries = await client.getEntries({
        content_type: 'blogPost',
        'fields.slug': slug,
        limit: 1,
      });

      if (entries.items.length === 0) {
        return res.status(404).json({ error: 'Post not found' });
      }

      const post = entries.items[0];
      const transformedPost = {
        id: post.sys.id,
        title: post.fields.title,
        slug: post.fields.slug,
        excerpt: post.fields.excerpt,
        body: post.fields.body,
        publishedAt: post.fields.publishedAt,
        coverImage: post.fields.coverImage ? {
          url: post.fields.coverImage.fields.file.url,
          title: post.fields.coverImage.fields.title,
          description: post.fields.coverImage.fields.description,
        } : null,
      };

      return res.status(200).json(transformedPost);
    } else {
      // Get all posts
      const entries = await client.getEntries({
        content_type: 'blogPost',
        order: '-fields.publishedAt',
        limit: 50,
      });

      const posts = entries.items.map(post => ({
        id: post.sys.id,
        title: post.fields.title,
        slug: post.fields.slug,
        excerpt: post.fields.excerpt,
        publishedAt: post.fields.publishedAt,
        coverImage: post.fields.coverImage ? {
          url: post.fields.coverImage.fields.file.url,
          title: post.fields.coverImage.fields.title,
          description: post.fields.coverImage.fields.description,
        } : null,
      }));

      return res.status(200).json(posts);
    }
  } catch (error) {
    console.error('Contentful API Error:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch posts',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
}