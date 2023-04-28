/* eslint-disable import/no-anonymous-default-export */

export default {
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'imgUrl',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'techstack',
            title: 'Tech Stack',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            title: 'Link',
            name: 'link',
            type: 'url'
        },
        {
            title: 'Repo',
            name: 'repo',
            type: 'url'
        }
    ]
}
