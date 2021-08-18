import { useEffect, useRef, useState } from 'react';
import defaultMarkdown from '@data/markdown';
import marked from 'marked';

export default function Home() {
    const [html, setHTML] = useState('');
    const [markdown, setMarkdown] = useState('');
    const textarea = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        const markdownValue = localStorage.getItem('markdown-value') || defaultMarkdown;
        setMarkdown(markdownValue);
        setHTML(marked(markdownValue));
    }, []);

    const handleMarkdownChanges = (e) => {
        setMarkdown(e.target.value);

        setHTML(marked(e.target.value));

        localStorage.setItem('markdown-value', e.target.value);
    };

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='col-span-1'>
                <textarea
                    className='bg-white min-h-screen dark:bg-gray-800 dark:text-white block w-full leading-10 border-0'
                    onChange={handleMarkdownChanges}
                    value={markdown}
                    ref={textarea}
                />
            </div>
            <div className='hidden lg:block col-span-1 max-h-screen shadow-lg bg-gray-50 dark:bg-gray-800 overflow-auto border-r-2'>
                <div
                    className='prose dark:prose-light lg:prose-lg mx-5 lg:mx-10 my-10 break-words max-w-none'
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </div>
    );
}
