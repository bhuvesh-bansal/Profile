import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-xl rounded-lg overflow-hidden"
        >
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-12 text-white">
            <h1 className="text-4xl font-bold">Bhuvesh Kumar</h1>
            <p className="mt-2 text-xl">Software Developer — Strong DSA & Backend Development Foundation</p>
            
            <div className="mt-6 flex space-x-4">
              <a href="mailto:er.bhuveshkumar@gmail.com" className="flex items-center hover:text-blue-200">
                <FaEnvelope className="mr-2" /> er.bhuveshkumar@gmail.com
              </a>
              <a href="tel:+919779181387" className="flex items-center hover:text-blue-200">
                <FaPhone className="mr-2" /> +91 9779181387
              </a>
            </div>
            
            <div className="mt-4 flex space-x-4">
              <a href="https://linkedin.com/in/bhuvesh-kumar-404b4b293" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center hover:text-blue-200">
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center hover:text-blue-200">
                <FaGithub className="mr-2" /> GitHub
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6">
            {/* Skills Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Programming Languages</h3>
                  <p>Java, C++, Swift, SQL, HTML/CSS</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Testing Knowledge</h3>
                  <ul className="list-disc list-inside">
                    <li>API testing with Postman</li>
                    <li>Automation with Selenium WebDriver</li>
                    <li>Various testing types expertise</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tools & Technologies</h3>
                  <p>Git, GitHub, Postman, Selenium, Jira, Xcode, Figma</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Core Fundamentals</h3>
                  <p>Data Structures, Algorithms, OOP, DBMS, Operating Systems</p>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Experience</h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold">Software Development Intern — Infosys</h3>
                <p className="text-gray-600">Feb 2025</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Collaborated with Agile teams to build a modular Library Management System</li>
                  <li>Implemented role-based access and user authentication features</li>
                  <li>Refactored code following SOLID principles and MVVM pattern</li>
                </ul>
              </div>
            </section>

            {/* Projects Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Personal Projects</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">MedDocs App</h3>
                  <p>Built a personal health management app on iOS with Supabase backend, managing appointments, medications, and reports.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Library Management System</h3>
                  <p>Developed a modular SwiftUI app with multi-role access control.</p>
                </div>
              </div>
            </section>

            {/* Education & Certifications */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Education & Certifications</h2>
              <div className="mb-4">
                <h3 className="text-xl font-semibold">Bachelor of Engineering in Computer Science</h3>
                <p className="text-gray-600">Chitkara University, Punjab — 2022-2026</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Certifications</h3>
                <ul className="list-disc list-inside mt-2">
                  <li>Infosys Internship Completion – Software Development (iOS)</li>
                  <li>Selected among Top 100 students for Infosys–Apple iOS App Development Program</li>
                </ul>
              </div>
            </section>

            {/* Achievements */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Achievements</h2>
              <ul className="list-disc list-inside">
                <li>Finalist – Top 20 teams at the Intra-College Smart India Hackathon (SIH)</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default App; 