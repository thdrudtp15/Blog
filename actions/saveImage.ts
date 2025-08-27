'use server';
import { randomUUID } from 'crypto';
import { writeFile } from 'fs/promises';
import path from 'path';

export const saveImage = async (file: File) => {
    const filename = randomUUID() + file.name.replace(/\s+/g, '');
    const filebuffer = Buffer.from(await file.arrayBuffer());
    const filepath = path.join(process.cwd(), 'public', 'images', filename);
    await writeFile(filepath, filebuffer);

    return `/images/${filename}`;
};
