import { useEffect, useRef, useState } from 'react';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
});

const defaultValue = `| وزن المادة | المتطلبات |
|---|---|  
| 3 ساعات | [\`عال 111\`](https://infosystems.blog/plan-study/course/CSC-111) [\`ريض 151\`](https://infosystems.blog/plan-study/course/MATH-151)          |

---

- [نظرة عامة](#نظرة-عامة)
- [مشروع المادة](#مشروع-المادة)
- [نصائح للمادة](#نصائح-للمادة)
- [مراجع المادة](#مراجع-للمادة)

<a name="نظرة-عامة"></a>

## [نظرة عامة](#نظرة-عامة)

<!-- start -->

هذه المادة ستكون بدايتك في مجال قواعد البيانات ، ستتعلم فيها مبادئ قواعد البيانات مثل:

1. ماهي البيانات و أنواعها
2. ماهي الجداول و انواعها و العلاقات بين الجداول
3. لغة \`SQL\` المستخدمة في قواعد البيانات
4. الجبر

<a name="مشروع-المادة"></a>

## [مشروع المادة](#مشروع-المادة)

المادة تحتوي على مشروع تنفذه مع مجموعة ، ويتكون من ثلاث مراحل (منفصلة عن بعض):

1. تصميم نموذج قاعدة بيانات متكامل مع اوامر لغة \`SQL\` لبناءها
2. [برنامج JDBC](https://github.com/DevMoath/jdbc) او \`Java Database Connectivity\` وهو عبارة عن برنامج بسيط بلغة جافا
   تربطة بقاعدة بيانات وتنفذ من خلاله اوامر \`SQL\`
3. كتابة أوامر \`SQL\` معقدة

<a name="نصائح-للمادة"></a>

## [نصائح للمادة](#نصائح-للمادة)

المادة تعتمد على الفهم بشكل كبير ولايوجد صعوبة كبيرة فيها وتعتبر مهمة لك كطالب نظم المعلومات سواء في مشروع التخرج او
مابعد التخرج تحتاج فقط الاهتمام ومراجعة بسيطة

<a name="مراجع-للمادة"></a>

## [مراجع المادة](#مراجع-للمادة)

ومن المراجع الجيدة في يوتيوب قناة [الاستاذ محمد الدسوقي](https://www.youtube.com/user/DesoukiEgypt)

رابط الدرايف للمادة
[https://drive.google.com/drive/folders/14UkfdkH7FXbceYrCyQ8kTB2u0uCU7UfI](https://drive.google.com/drive/folders/14UkfdkH7FXbceYrCyQ8kTB2u0uCU7UfI)`;

export default function Home() {
    const [markdown, setMarkdown] = useState('');
    const [value, setValue] = useState(defaultValue);
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

    const copyHtml = () => {
        const textField = document.createElement('textarea');
        textField.innerText = markdown;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();

        alert('Copied the text: ' + markdown);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-10 lg:gap-4 min-h-screen">
            <div className="col-span-5 card rounded-none">
                <div className="px-1">
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
                <div className="my-5 flex flex-wrap justify-center gap-4">
                    <button className="btn" onClick={copyMarkdown}>
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
                    <button className="btn btn-primary" onClick={copyHtml}>
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
                    <button className="btn btn-secondary" onClick={() => setValue('')}>
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
                <div className="card bg-base-300 min-h-screen">
                    <div
                        className="prose text-right mx-5 lg:mx-auto my-10 break-words"
                        dangerouslySetInnerHTML={{ __html: markdown }}
                    />
                </div>
            </div>
        </div>
    );
}
