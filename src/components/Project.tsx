import { useState, useEffect } from "react";
import Image from "next/image";
import { SiVisualstudiocode } from "react-icons/si";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { groq } from "next-sanity";
import urlFor, { client } from "../../lib/sanity.client";

type Project = {
  title: string;
  imgUrl: string;
  description: any;
  techstack: string[];
  link: string;
  repo: string;
};

export default function Project() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const query = groq`*[_type == "project"]{
      title,
      imgUrl,
      description,
      techstack,
      link,
      repo
    }`;

    client.fetch(query).then((data) => {
      setProjects(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div className="flex items-center justify-between mx-5 my-10 md:my-20 lg:my-32">
        <h2 className="flex justify-center items-center gap-3 ml-32 text-2xl font-bold rounded-xl bg-vingo/20 w-44 text-vingo">
          <SiVisualstudiocode className="text-blue-600" /> Projects
        </h2>
        <div className="flex justify-center items-center gap-5 mr-44">
          <BsChevronCompactLeft className="text-vingo w-7 h-7" />
          <BsChevronCompactRight className="text-vingo w-7 h-7" />
        </div>
      </div>

      {isLoading ? (
        <p>Loading ...</p>
      ) : projects.length === 0 ? (
        <p>No Data Found.</p>
      ) : (
        <div>
          {projects.map((project) => (
            <div key={project.title}>
              <Image
                className="w-60 h-32"
                src={urlFor(project.imgUrl).url()}
                alt=""
                width={500}
                height={350}
              />
              <p>{project.title}</p>
              <div className="flex gap-3">
                {project.techstack.map((tech) => (
                  <p key={tech}>{tech}</p>
                ))}
              </div>
              <p>{project.description[0].children[0].text}</p>
              <div className="flex gap-5">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
