import { useEffect, useRef, useState } from 'react';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
});

export default function Home() {
    const [markdown, setMarkdown] = useState('');
    const [value, setValue] = useState('');
    const textarea = useRef(null);

    useEffect(() => {
        setMarkdown(parser.render(value));
    }, [value]);

    const copyMarkdown = () => {
        textarea.current.select();
        textarea.current.setSelectionRange(0, 99999);

        document.execCommand('copy');

        alert('Copied the text: ' + textarea.current.value);
    };

    return (
        <div className="grid lg:grid-cols-1 lg:grid-cols-10 lg:gap-4 min-h-screen">
            <div className="col-span-5 card rounded-none">
                <div className="w-full px-1">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text" />
                        </label>
                        <textarea
                            className="textarea h-screen textarea-bordered"
                            onChange={(e) => setValue(e.target.value)}
                            value={value}
                            ref={textarea}
                        />
                    </div>
                </div>
            </div>
            <div className="col-span-5">
                <div className="my-5 flex justify-center">
                    <button className="btn mr-2" onClick={copyMarkdown}>
                        copy markdown
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 ml-2"
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
                    </button>
                    <button className="btn btn-primary mr-2">
                        copy html
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 ml-2"
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
                    </button>
                    <button className="btn btn-secondary mr-2" onClick={() => setValue('')}>
                        clear
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 ml-2"
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
                    </button>
                </div>
                <div className="w-full card bg-base-300 min-h-screen">
                    <div
                        className="prose prose-lg text-right w-full mx-auto mt-10"
                        dangerouslySetInnerHTML={{ __html: markdown }}
                    />
                </div>
            </div>
        </div>
    );
}
