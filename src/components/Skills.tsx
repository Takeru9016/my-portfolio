import Image from "next/image";
import urlFor from "../../lib/sanity.client";

type Props = {
    skills: Skills[]
}

export default function Skills({ skills }: Props) {
    return (
        <div>
            Skills
            {skills.map((skill, index) => (
                <Image
                    key={index}
                    src={urlFor(skill.icon).url()}
                    alt={skill.text}
                    width={10}
                    height={10}
                />
            ))}
        </div>
    )
}
