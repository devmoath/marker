import { useEffect, useRef, useState } from 'react';
import MarkdownIt from 'markdown-it';
import defaultValue from '@data/markdown';
import Head from 'next/head';
import Actions from '@components/Actions';

const parser = new MarkdownIt({
    html: false,
    linkify: true,
    typographer: true,
});

export default function Home() {
    const [markdown, setMarkdown] = useState('');
    const [value, setValue] = useState(defaultValue);
    const textarea = useRef(null);

    useEffect(() => {
        setMarkdown(parser.render(value));
    }, [value]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 min-h-screen">
            <Head>
                <title>RTL Markdown Editor</title>
                <meta content="width=device-width, initial-scale=1.0, viewport-fit=cover" name="viewport" />
            </Head>
            <div className="col-span-1 lg:col-span-10">
                <Actions textarea={textarea} markdown={markdown} value={value} setValue={setValue} />
            </div>
            <div className="col-span-1 lg:col-span-5 card rounded-none">
                <div className="px-1">
                    <div className="form-control">
                        <textarea
                            className="textarea h-screen textarea-bordered"
                            onChange={(e) => setValue(e.target.value)}
                            value={value}
                            ref={textarea}
                        />
                    </div>
                </div>
            </div>
            <div className="col-span-1 lg:col-span-5">
                <div className="card bg-base-200 min-h-screen">
                    <div
                        className="prose text-right mx-5 lg:mx-auto my-10 break-words"
                        dangerouslySetInnerHTML={{ __html: markdown }}
                    />
                </div>
            </div>
        </div>
    );
}
