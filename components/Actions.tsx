import copy from '@devmoath/copy-text';
import { MutableRefObject } from 'react';

export default function Actions({ textarea, html }: {
    textarea: MutableRefObject<HTMLTextAreaElement>;
    html: string;
}) {
    const copyMarkdown = () => {
        copy(textarea.current.value);

        alert('Copied markdown text');
    };

    const copyHtml = () => {
        copy(html);

        alert('Copied html text');
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
        </div>
    );
}
