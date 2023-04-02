/* eslint-disable import/no-anonymous-default-export */

export default {
    name: 'skill',
    title: 'Skills',
    type: 'document',
    fields: [
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: "text",
            title: "Text",
            type: "string",
        },
    ]
}