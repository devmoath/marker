import { useEffect, useRef, useState } from 'react';
import defaultMarkdown from '@data/markdown';
import { marked } from 'marked';
import { usePreview } from '@contexts/preview';
import classNames from 'classnames';

// noinspection JSUnusedGlobalSymbols
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
                    className="my-[64px] mx-0 block h-screen w-full resize-none border-0 bg-white py-0 leading-10 dark:bg-gray-800 dark:text-white lg:my-0 lg:pt-[64px]"
                    onChange={handleMarkdownChanges}
                    value={markdown}
                    ref={textarea}
                />
            </div>
            <div
                className={classNames(
                    'col-span-1 h-screen overflow-auto border-r-gray-500 bg-gray-50 dark:bg-gray-800 lg:block lg:border-r-2',
                    {
                        block: isPreviewMode,
                        hidden: !isPreviewMode,
                    },
                )}
            >
                <div
                    className="prose mx-8 max-w-none break-words pt-[90px] dark:prose-invert lg:prose-lg lg:mx-10"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </div>
    );
}
