const securityHeaders = [
    {
        key: 'X-DNS-Prefetch-Control',
        value: 'on',
    },
    {
        key: 'Strict-Transport-Security',
        value: 'max-age=31536000; includeSubDomains; preload',
    },
    {
        key: 'X-XSS-Protection',
        value: '1; mode=block',
    },
    {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN',
    },
    {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
    },
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
    },
    {
        key: 'Referrer-Policy',
        value: 'origin-when-cross-origin',
    },
];

// noinspection JSUnusedGlobalSymbols
module.exports = {
    reactStrictMode: true,
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: securityHeaders,
            },
        ];
    },
    async redirects() {
        return [
            {
                source: '/twitter',
                destination: 'https://twitter.com/intent/follow?screen_name=dev_moath',
                permanent: true,
            },
            {
                source: '/github',
                destination: 'https://github.com/devmoath',
                permanent: true,
            },
            {
                source: '/linkedin',
                destination: 'https://www.linkedin.com/in/moath-alhajri',
                permanent: true,
            },
            {
                source: '/youtube',
                destination: 'https://www.youtube.com/channel/UCm-qdl6K8w6hvxFwgO7u5qw',
                permanent: true,
            },
            {
                source: '/instagram',
                destination: 'https://www.instagram.com/dev_moath',
                permanent: true,
            },
            {
                source: '/ksu',
                destination: 'https://ksu.edu.sa',
                permanent: true,
            },
            {
                source: '/work',
                destination: 'https://tamkeentech.sa/',
                permanent: true,
            },
        ];
    },
};
