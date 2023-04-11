import Image from "next/image";

import urlFor from "../../lib/sanity.client";

interface Props {
    skills: Skill[];
};


export default function Skills({ skills }: Props) {
    return (
        <div>
            {Array.isArray(skills) && skills.length > 0 ? (
                skills?.map((skill, index) => (
                    <Image
                        key={index}
                        src={urlFor(skill.icon).url()}
                        alt={skill.text}
                        width={30}
                        height={30}
                    />
                ))
            ) : (
                <p>No skills data found.</p>
            )}
        </div>
    );
};
