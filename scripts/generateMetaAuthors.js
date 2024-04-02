const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const authorsDirectory = path.join(process.cwd(), 'contents/authors');
const metadataFile = path.join(process.cwd(), 'metas/generatedMetaAuthors.json');

const getAuthorsMetadata = () => {
    const files = fs.readdirSync(authorsDirectory);
    const authors = files.map((filename) => {
        const filePath = path.join(authorsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data: metadata } = matter(fileContents);

        return {
            ...metadata,
            slug: filename.replace(/\.mdx$/, ''),
        };
    });

    return authors;
};

const metadata = getAuthorsMetadata();
fs.writeFileSync(metadataFile, JSON.stringify(metadata, null, 2));
