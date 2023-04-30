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
  const [currentPage, setCurrentPage] = useState<number>(1);

  const projectsPerPage = 3;
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
          <BsChevronCompactLeft
            className={`${
              currentPage === 0 ? "disabled" : ""
            } text-vingo w-7 h-7 cursor-pointer`}
            onClick={() => paginate(currentPage - 1)}
          />
          <BsChevronCompactRight
            className="text-vingo w-7 h-7 cursor-pointer"
            onClick={() => paginate(currentPage + 1)}
          />
        </div>
      </div>

      {isLoading ? (
        <p>Loading ...</p>
      ) : currentProjects.length === 0 ? (
        <p>No Data Found.</p>
      ) : (
        <div className="grid grid-cols-3 justify-center gap-5 w-fit mx-24">
          {currentProjects.map((project) => (
            <div
              className="justify-center border-2 border-vingo/50 rounded-2xl"
              key={project.title}
            >
              <Image
                className="rounded-t-2xl"
                src={urlFor(project.imgUrl).width(800).height(500).url()}
                alt={project.title}
                width={800}
                height={500}
              />

              <p className="flex justify-center mt-4 text-vingo">
                {project.title}
              </p>
              <div className="flex mt-5 flex-wrap gap-3">
                {project.techstack.map((tech) => (
                  <p
                    className="ml-3 bg-vingo/20 w-auto px-3 rounded-full text-vingo"
                    key={tech}
                  >
                    {tech}
                  </p>
                ))}
              </div>

              <p className="mx-5 text-justify my-5">
                {project.description[0].children[0].text}
              </p>
              <div className="flex justify-center my-5 gap-28">
                <a
                  className="border border-vingo w-auto px-5 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                >
                  Demo
                </a>
                <a
                  className="border border-vingo w-auto px-5 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.repo}
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
