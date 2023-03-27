/* eslint-disable import/no-anonymous-default-export */

export default {
    name: 'skill',
    title: 'Skills',
    type: 'document',
    fields: [
        {
            name: 'imahe',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: "alternatetext",
            title: "Alternate Text",
            type: "string",
        },
    ]
}