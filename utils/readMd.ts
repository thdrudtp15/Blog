import fs from 'fs';
import path from 'path';

const mdDir = path.join(process.cwd(), 'markdown');

export const readMd = (filePath: string) => {
    const fullPath = path.join(mdDir, `${filePath}.md`);
    const fileContent = fs.readFileSync(fullPath, 'utf-8');
    return fileContent;
};
