const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDirectory = path.join(process.cwd(), 'contents/posts');
const metadataFile = path.join(process.cwd(), 'metas/generatedMetaPosts.json');

const getPostMetadata = () => {
    const files = fs.readdirSync(postsDirectory);
    const posts = files.map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data: metadata } = matter(fileContents);

        return {
            ...metadata,
            slug: filename.replace(/\.mdx$/, ''),
        };
    });

    return posts;
};

const metadata = getPostMetadata();
fs.writeFileSync(metadataFile, JSON.stringify(metadata, null, 2));
