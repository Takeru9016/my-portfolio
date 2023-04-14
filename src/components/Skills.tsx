import { useState, useEffect } from "react";
import Image from "next/image";
import urlFor, { client } from "../../lib/sanity.client";

interface Skill {
    icon: string;
    text: string;
}

export default function Skills() {
    const [fetchedSkills, setFetchedSkills] = useState<Skill[]>([]);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const query = `*[_type == 'skills']`;
                const data = await client.fetch(query);
                setFetchedSkills(data);
            } catch (error) {
                console.error("Failed to fetch skills data:", error);
            }
        };

        fetchSkills();
    }, []);

    return (
        <div className="grid justify-center items-center grid-cols-5 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {Array.isArray(fetchedSkills) && fetchedSkills.length > 0 ? (
                fetchedSkills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-4 shadow-md"
                    >
                        <Image
                            src={skill.icon ? urlFor(skill.icon).url() : ""}
                            alt={skill.text}
                            width={60}
                            height={60}
                            className="mb-2"
                        />
                    </div>
                ))
            ) : (
                <p>No skills data found.</p>
            )}
        </div>
    );
}
