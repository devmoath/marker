import { useEffect, useRef, useState } from 'react';
import defaultValue from '@data/markdown';
import Actions from '@components/Actions';
import marked from 'marked';

export default function Home() {
    const [html, setHTML] = useState('');
    const [markdown, setMarkdown] = useState(defaultValue);
    const textarea = useRef(null);

    useEffect(() => setHTML(marked(markdown)), [markdown]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 min-h-screen">
            <div className="col-span-1 lg:col-span-10">
                <Actions textarea={textarea} html={html} markdown={markdown} setMarkdown={setMarkdown} />
            </div>
            <div className="col-span-1 lg:col-span-5 card rounded-none">
                <div className="p-1">
                    <div className="form-control">
                        <textarea
                            className="textarea h-screen textarea-bordered"
                            onChange={(e) => setMarkdown(e.target.value)}
                            value={markdown}
                            ref={textarea}
                        />
                    </div>
                </div>
            </div>
            <div className="col-span-1 lg:col-span-5">
                <div className="card bg-base-200 min-h-screen">
                    <div
                        className="prose lg:prose-lg mx-5 lg:mx-10 my-10 break-words"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
        </div>
    );
}
