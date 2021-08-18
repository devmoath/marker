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
        <div className='grid grid-cols-1 lg:grid-cols-10 gap-x-4 gap-y-8 mx-3 md:mx-0'>
            <div className='col-span-1 mx-2 lg:mx-0 lg:col-span-5 lg:min-h-[700px] lg:max-h-[700px]'>
                <textarea
                    className='bg-white h-[calc(100vh-200px)] lg:min-h-[700px] lg:max-h-[700px] dark:bg-gray-800 dark:text-white block w-full rounded-lg border-gray-300 dark:border-white shadow-lg focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 leading-10'
                    onChange={handleMarkdownChanges}
                    value={markdown}
                    ref={textarea}
                />
            </div>
            <div className='col-span-1 lg:col-span-5 lg:min-h-[700px] lg:max-h-[700px] rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800 overflow-auto'>
                <div
                    className='prose dark:prose-light lg:prose-lg mx-5 lg:mx-10 my-10 break-words max-w-none'
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </div>
    );
}
