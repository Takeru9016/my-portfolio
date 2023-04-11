type Skill = {
    icon: {
        asset: {
            url: string;
        }
    };
    text: string;
};

type Projects = {
    title: string;
    imgUrl: Image;
    description: Block[];
    techstack: string;
    link: string;
}

type Block = {
    _key: string;
    _type: "block";
    children: Child[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}