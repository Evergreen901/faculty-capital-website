export const BLOG_TAG_TYPE = {
    ALL: 99,
    NEWS: 3,
    PODCAST: 4,
    FEATURED: 5,
    INSIGHTS: 6,
    RESEARCH: 7,
};

export const MAX_FILE_SIZE = 1024 * 1024 * 10;

export const PROJECT_TAG_TYPE = {
    FEATURED: 8,
};

export const navigation = [
    {
        label: 'home.title',
        link: '/',
    },
    {
        label: 'story.title-menu',
        link: '/story',
    },
    // {
    //     label: 'solution.title-menu',
    //     link: '/solution',
    // },
    {
        label: 'portfolio.title',
        link: '/portfolio',
    },
    {
        label: 'blog.title',
        link: '/blog',
    },
    {
        label: 'contact.title',
        link: '/contact',
    },
];
