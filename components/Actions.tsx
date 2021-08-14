import prettier from 'prettier';
import parserMarkdown from 'prettier/parser-markdown';
import copy from '@devmoath/copy-text';
import { MutableRefObject } from 'react';

interface ActionsProps {
    textarea: MutableRefObject<HTMLTextAreaElement>;
    html: string;
    markdown: string;
    setMarkdown: (value: string) => void;
    setHTML: (value: string) => void;
}

export default function Actions({ textarea, html, markdown, setMarkdown, setHTML }: ActionsProps) {
    const copyMarkdown = () => {
        copy(textarea.current.value);

        alert('Copied markdown text');
    };

    const copyHtml = () => {
        copy(html);

        alert('Copied html text');
    };

    const format = () => {
        const formattedMarkdown = prettier.format(markdown, {
            parser: 'markdown',
            plugins: [parserMarkdown],
            printWidth: 120,
            singleQuote: true,
            tabWidth: 4,
            trailingComma: 'es5',
        });

        setMarkdown(formattedMarkdown);
    };

    const clear = () => {
        if (confirm('Are you sure ?')) {
            setMarkdown('');
            setHTML('');
            localStorage.setItem('markdown-value', '');
        }
    };

    return (
        <div className="flex flex-wrap justify-center gap-4">
            <button
                className="flex gap-2 py-3 px-4 uppercase text-white transition-colors duration-200 transform bg-blue-600 rounded-lg dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-900 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-900 truncate text-center"
                onClick={copyMarkdown}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M7 15v-6l2 2l2 -2v6" />
                    <path d="M14 13l2 2l2 -2m-2 2v-6" />
                </svg>
                <span>copy markdown</span>
            </button>
            <button
                className="flex gap-2 py-3 px-4 uppercase text-white transition-colors duration-200 transform bg-blue-600 rounded-lg dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-900 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-900 truncate text-center"
                onClick={copyHtml}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                    <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
                </svg>
                <span>copy html</span>
            </button>
            <button
                className="flex gap-2 py-3 px-4 uppercase text-white transition-colors duration-200 transform bg-blue-600 rounded-lg dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-900 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-900 truncate text-center"
                onClick={format}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 4a2 2 0 0 0 -2 2v3a2 3 0 0 1 -2 3a2 3 0 0 1 2 3v3a2 2 0 0 0 2 2" />
                    <path d="M17 4a2 2 0 0 1 2 2v3a2 3 0 0 0 2 3a2 3 0 0 0 -2 3v3a2 2 0 0 1 -2 2" />
                </svg>
                <span>format</span>
            </button>
            <button
                className="flex gap-2 py-3 px-4 uppercase text-white transition-colors duration-200 transform bg-blue-600 rounded-lg dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-900 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-900 truncate text-center"
                onClick={clear}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19 19h-11l-4 -4a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9 9" />
                    <line x1="18" y1="12.3" x2="11.7" y2="6" />
                </svg>
                <span>clear</span>
            </button>
        </div>
    );
}
