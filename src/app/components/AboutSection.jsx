"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>ReactJs</li>
        <li>NextJs</li>
        <li>Nodejs</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>TailwindCSS</li>
        <li>Framer Motion</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>Figma</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor&apos;s in Information Technology</li>
        <p className="text-xs italic font-thin">Bahria University, Lahore</p>
        <p className="text-xs italic font-thin">2019 - 2023</p>
        <li>Fsc Pre-Engineering</li>
        <p className="text-xs italic font-thin">Nishat College Of Science, Multan</p>
        <p className="text-xs italic font-thin">2016 - 2018</p>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <a href="https://www.coursera.org/account/accomplishments/certificate/652E6BBTYZKG" target="blank">
          <li>Introduction to Web Development with HTML, CSS, JavaScript</li>
        </a>
        <p className="text-xs italic font-thin">IBM</p>
        <a href="https://www.coursera.org/account/accomplishments/certificate/88XACBYK3VT2" target="blank">
            <li>Front-End Web Development with React</li>
        </a>
        <p className="text-xs italic font-thin">The Hong Kong University of Science and Technology</p>
        <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/Z6PV64AQ5TEB" target="blank">
          <li>Meta Front-End Developer</li>
          </a>
          <p className="text-xs italic font-thin">Meta</p>
          <a href="https://www.udemy.com/certificate/UC-98232f41-83ae-430c-9601-24e5e00eee16/" target="blank">
            <li>
              Master Javascript Animations with GreenSock
            </li>
          </a>
          <p className="text-xs italic font-thin">Udemy</p>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about.png" alt="" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, ReactJS, NextJs, Node.js, Express, MongoDB,
            TailwindCSS, Framer Motion, HTML, CSS, Bootstrap and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
