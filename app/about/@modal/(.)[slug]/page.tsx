import { notFound } from 'next/navigation';
import { getProjects } from '@/utils/getProjects';
import ProjectDetailModal from '@/components/ProjectDetailModal';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    const project = getProjects({ title: slug });

    if (!project) {
        notFound();
    }

    const content = await serialize(project.content, {
        mdxOptions: {
            rehypePlugins: [rehypeHighlight, rehypeSlug, rehypeStringify],
            remarkPlugins: [remarkGfm],
        },
        scope: {},
    });

    return <ProjectDetailModal project={project} content={content} />;
};

export default Page;
