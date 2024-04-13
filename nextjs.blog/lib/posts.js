import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'pages/posts');

export function getSortedPostsData() {
//   // Instead of the file system,
//   // fetch post data from an external API endpoint
//   const res = await fetch('..');
//   return res.json();

  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    console.log({
      ...matterResult.data,
      content: matterResult.content
    })
    return {
      id,
      ...matterResult.data,
      content: matterResult.content
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b, c) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}