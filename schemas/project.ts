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
            name: 'mainImage',
            title: 'Main Image',
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
            type: 'string'
        },
        {
            title: 'Link',
            name: 'link',
            type: 'url'
        }
    ]
}