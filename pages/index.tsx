import { useEffect, useRef, useState } from 'react';
import defaultMarkdown from '@data/markdown';
import { marked } from 'marked';
import { usePreview } from '@contexts/preview';
import classNames from 'classnames';

export default function Home() {
    const [html, setHTML] = useState('');
    const [markdown, setMarkdown] = useState('');
    const textarea = useRef<HTMLTextAreaElement>(null);
    const { isPreviewMode } = usePreview();

    useEffect(() => {
        const markdownValue = localStorage.getItem('markdown-value') || defaultMarkdown;
        setMarkdown(markdownValue);
        setHTML(marked.parse(markdownValue));
    }, []);

    const handleMarkdownChanges = (e) => {
        setMarkdown(e.target.value);

        setHTML(marked.parse(e.target.value));

        localStorage.setItem('markdown-value', e.target.value);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div
                className={classNames('col-span-1 lg:block', {
                    hidden: isPreviewMode,
                })}
            >
                <textarea
                    className="block min-h-screen w-full border-0 bg-white leading-10 dark:bg-gray-800 dark:text-white"
                    onChange={handleMarkdownChanges}
                    value={markdown}
                    ref={textarea}
                />
            </div>
            <div
                className={classNames(
                    'col-span-1 max-h-screen overflow-auto bg-gray-50 shadow-lg dark:bg-gray-800 lg:block lg:border-r-2',
                    {
                        block: isPreviewMode,
                        hidden: !isPreviewMode,
                    }
                )}
            >
                <div
                    className="prose mx-5 my-10 max-w-none break-words dark:prose-light lg:prose-lg lg:mx-10"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </div>
    );
}
