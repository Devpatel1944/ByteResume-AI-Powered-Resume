import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center p-6  ">
      <div className="max-w-4xl text-center space-y-6">
        <div className="badge badge-accent text-white text-lg p-4">🚀 Powered by AI</div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Create Resumes That Impress — Instantly!
        </h1>
        <p className="text-lg text-base-content">
          Welcome to <span className="font-semibold text-primary">Byte Resume</span>, your smart assistant for building
          job-winning resumes. Our AI-powered engine understands your input, analyzes your skills,
          and generates professional resume content tailored to the job you're targeting.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-2">⚙️</div>
              <h2 className="card-title">AI-Powered Generator</h2>
              <p>
                Our intelligent system creates resume sections like summary, experience,
                and skills with precision and clarity.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-2">🎯</div>
              <h2 className="card-title">Targeted for Jobs</h2>
              <p>
                Tailor resumes to specific roles, industries, or job descriptions
                using natural language prompts.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-2">💡</div>
              <h2 className="card-title">Smart Suggestions</h2>
              <p>
                Get real-time feedback and suggestions to enhance your
                profile and showcase your potential.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
