interface Skills {
    icon: Image;
    text: string;
}

interface Projects {
    title: string;
    imgUrl: Image;
    description: Block[];
    techstack: string;
    link: string;
}

interface Block {
    _key: string;
    _type: "block";
    children: Child[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}