import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail, HiPhone } from 'react-icons/hi';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Bhuvesh Kumar</h1>
            <p className="text-xl md:text-2xl mb-8">Software Developer | iOS Enthusiast</p>
            <div className="flex justify-center space-x-4">
              <a href="mailto:er.bhuveshkumar@gmail.com" className="flex items-center hover:text-blue-200">
                <HiMail className="w-6 h-6 mr-2" />
                <span>Email</span>
              </a>
              <a href="tel:+919779181387" className="flex items-center hover:text-blue-200">
                <HiPhone className="w-6 h-6 mr-2" />
                <span>Call</span>
              </a>
              <a href="https://linkedin.com/in/bhuvesh-kumar-404b4b293" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-200">
                <FaLinkedin className="w-6 h-6 mr-2" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-200">
                <FaGithub className="w-6 h-6 mr-2" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-4">
              I am currently pursuing my Bachelor of Engineering in Computer Science at Chitkara University, Punjab, in my 6th semester. 
              While I may not have extensive industry experience, I bring strong hands-on internship and project experience, 
              coupled with a fast learning ability and deep commitment to growing quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <SkillCard title="Programming Languages" skills={["Java", "C++", "Swift", "SQL", "HTML/CSS"]} />
            <SkillCard title="Testing Knowledge" skills={[
              "API testing with Postman",
              "Selenium WebDriver automation",
              "Various testing types",
              "Test case writing"
            ]} />
            <SkillCard title="Tools & Technologies" skills={[
              "Git", "GitHub", "Postman",
              "Selenium", "Jira", "Xcode", "Figma"
            ]} />
            <SkillCard title="Core Fundamentals" skills={[
              "Data Structures",
              "Algorithms",
              "OOP",
              "DBMS",
              "Operating Systems"
            ]} />
            <SkillCard title="Development Practices" skills={[
              "Agile Methodology",
              "MVVM Architecture",
              "Clean Code principles",
              "Unit Testing",
              "Debugging"
            ]} />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="max-w-4xl mx-auto">
            <ExperienceCard 
              title="Software Development Intern"
              company="Infosys"
              date="Feb 2025"
              points={[
                "Collaborated with Agile teams to build a modular Library Management System",
                "Implemented role-based access and user authentication features",
                "Refactored and improved code quality by following SOLID principles and the MVVM pattern"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="max-w-4xl mx-auto grid gap-8">
            <ProjectCard
              title="MedDocs App"
              description="Personal health management app on iOS with Supabase backend"
              points={[
                "Manages appointments, medications, and reports",
                "Built with SwiftUI and Supabase",
                "Implements real-time sync and offline-first caching"
              ]}
            />
            <ProjectCard
              title="Library Management System"
              description="Modular SwiftUI app with multi-role access control"
              points={[
                "Implemented role-based authentication",
                "Built with MVVM architecture",
                "Features comprehensive book management system"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Achievements</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4 list-disc list-inside">
              <li>Finalist – Top 20 teams at the Intra-College Smart India Hackathon (SIH)</li>
              <li>Selected among the Top 100 students for the Infosys–Apple iOS App Development Program</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <ul className="list-disc list-inside space-y-2">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);

const ExperienceCard = ({ title, company, date, points }: { 
  title: string; 
  company: string; 
  date: string; 
  points: string[] 
}) => (
  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md mb-6">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-2">{company} | {date}</p>
    <ul className="list-disc list-inside space-y-2">
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

const ProjectCard = ({ title, description, points }: {
  title: string;
  description: string;
  points: string[];
}) => (
  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
    <ul className="list-disc list-inside space-y-2">
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
); 