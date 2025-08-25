import React from 'react';

export default function Prose({ content }: { content: string }) {
    return <div className="prose" dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }} />;
}

function renderMarkdown(md: string): string {
    // 매우 간단한 마크다운 렌더러 (실서비스에서는 remark/rehype 권장)
    let html = md
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
        .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*(.*)\*/gim, '<em>$1</em>')
        .replace(/`([^`]+)`/gim, '<code>$1</code>')
        .replace(/!\[(.*?)\]\((.*?)\)/gim, '<img alt="$1" src="$2" />')
        .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>')
        .replace(/\n\n/g, '</p><p>');

    // fenced code blocks ```lang ... ```
    html = html.replace(/```([\s\S]*?)```/g, (m, p1) => {
        const escaped = p1.replace(/[&<>]/g, (c: string) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c] as string));
        return `<pre><code>${escaped}</code></pre>`;
    });

    return `<p>${html}</p>`;
}
