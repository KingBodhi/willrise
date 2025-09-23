const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

// Read the posts from the TypeScript file
const postsFilePath = path.join(__dirname, '..', 'content', 'blog', 'posts.ts');
const postsFileContent = fs.readFileSync(postsFilePath, 'utf8');

// Extract the posts array from the TypeScript file
const postsMatch = postsFileContent.match(/export const posts: Post\[\] = (\[[\s\S]*?\]);/);
if (!postsMatch) {
  console.error('Could not find posts array in posts.ts');
  process.exit(1);
}

// Parse the posts (this is a simplified parser for the specific format)
const postsString = postsMatch[1]
  .replace(/export const posts: Post\[\] = /, '')
  .replace(/;$/, '');

// Use eval to parse the array (not ideal but works for this migration)
let posts;
try {
  posts = eval(postsString);
} catch (error) {
  console.error('Error parsing posts array:', error);
  process.exit(1);
}

async function migratePosts() {
  console.log(`Found ${posts.length} posts to migrate...`);

  try {
    for (const post of posts) {
      const existingPost = await prisma.blogPost.findUnique({
        where: { slug: post.slug }
      });

      if (existingPost) {
        console.log(`Updating existing post: ${post.title}`);
        await prisma.blogPost.update({
          where: { slug: post.slug },
          data: {
            title: post.title,
            excerpt: post.excerpt || '',
            content: post.body || '',
            category: post.category || null,
            readTime: post.readTime || null,
            featuredImage: post.image || null,
            status: 'ACTIVE',
            publishedAt: new Date(post.date)
          }
        });
      } else {
        console.log(`Creating new post: ${post.title}`);
        await prisma.blogPost.create({
          data: {
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt || '',
            content: post.body || '',
            category: post.category || null,
            readTime: post.readTime || null,
            featuredImage: post.image || null,
            status: 'ACTIVE',
            author: 'WillRise Team',
            publishedAt: new Date(post.date)
          }
        });
      }
    }

    console.log('✅ Migration completed successfully!');

    // Verify the migration
    const count = await prisma.blogPost.count();
    console.log(`Total blog posts in database: ${count}`);

  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

migratePosts();