const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const contentsDirectory = path.join(process.cwd(), 'contents');
const authorsMdxDirectory = path.join(contentsDirectory, '/authors');
const postsMdxDirectory = path.join(contentsDirectory, '/posts');

const metadataDirectory = path.join(process.cwd(), 'metadata');
const authorsMetadataPath = path.join(metadataDirectory, '/authors.json');
const postsMetadataPath = path.join(metadataDirectory, '/posts.json');

const parseMetadata = (directory) => {
    const files = fs.readdirSync(directory);
    return files.map((filename) => {
        const filePath = path.join(directory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data: metadata } = matter(fileContents);
        const slug = filename.replace(/\.mdx$/, '')

        return { ...metadata, slug};
    });
}


const authorsMetadata = parseMetadata(authorsMdxDirectory);
fs.writeFileSync(authorsMetadataPath, JSON.stringify(authorsMetadata, null, 2));

const postsMetadata = parseMetadata(postsMdxDirectory).sort((a, b) => b.date - a.date);
fs.writeFileSync(postsMetadataPath, JSON.stringify(postsMetadata, null, 2));
