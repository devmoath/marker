import { NextSeo } from 'next-seo';

interface SEOProps {
    title?: string;
    description?: string;
}

export default function SEO({
    title = 'RTL Markdown Editor',
    description = 'Markdown Editor for RTL languages',
}: SEOProps) {
    return (
        <NextSeo
            title={title}
            description={description}
            canonical={process.env.NEXT_PUBLIC_BASE_URL}
            openGraph={{
                images: [{ url: `${process.env.NEXT_PUBLIC_BASE_URL}/favicon.svg` }],
                site_name: title,
                locale: 'ar-SA',
                type: 'website',
            }}
            twitter={{
                handle: '@Dev_Moath',
                site: '@Dev_Moath',
                cardType: 'summary_large_image',
            }}
            additionalMetaTags={[
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
                },
            ]}
            additionalLinkTags={[
                {
                    rel: 'icon',
                    type: 'image/svg+xml',
                    href: '/favicon.svg',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    href: '/favicon.png',
                },
            ]}
        />
    );
}
