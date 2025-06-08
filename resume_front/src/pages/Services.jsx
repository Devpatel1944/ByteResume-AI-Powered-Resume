import React from "react";

const Service = () => {
  return (
    <div className="min-h-screen overflow-y-scroll scroll-hidden bg-base-100 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full text-center space-y-10">
        {/* Header Badge */}
        <div className="badge badge-secondary text-white text-lg p-4">
          🛠️ AI Resume Services
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Powerful Resume Generation at Your Fingertips
        </h1>

        {/* Description */}
        <p className="text-lg text-base-content">
          <span className="font-semibold text-primary">Byte Resume</span> uses advanced AI models to help you craft
          job-winning resumes. From personalized summaries to skill-based sections, our intelligent backend
          tailors your resume to make a lasting impression on recruiters — instantly, and stress-free.
        </p>

        {/* Core Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="text-4xl">🧠</div>
              <h2 className="card-title">AI-Based Resume Writer</h2>
              <p>
                Enter your job role, skills or experience — and get
                professionally written resume content within seconds.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="text-4xl">📝</div>
              <h2 className="card-title">Smart Section Generator</h2>
              <p>
                Automatically generate summaries, experiences, and skill highlights based on your input.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="text-4xl">⚡</div>
              <h2 className="card-title">Fast & Reliable</h2>
              <p>
                Generate resume content in real-time with fast backend performance and accurate suggestions.
              </p>
            </div>
          </div>
        </div>

        {/* Future Enhancements */}
        <div className="mt-16 space-y-6">
          <h2 className="text-3xl font-bold text-primary">🔮 Upcoming Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card bg-base-300 shadow-lg">
              <div className="card-body">
                <h3 className="text-xl font-semibold">🎨 Resume Templates</h3>
                <p>
                  Choose from a variety of modern and professional templates to suit your industry and style.
                </p>
              </div>
            </div>
            <div className="card bg-base-300 shadow-lg">
              <div className="card-body">
                <h3 className="text-xl font-semibold">✅ ATS Score Checker</h3>
                <p>
                  Evaluate your resume against Applicant Tracking Systems and optimize it for top scores.
                </p>
              </div>
            </div>
            <div className="card bg-base-300 shadow-lg">
              <div className="card-body">
                <h3 className="text-xl font-semibold">🌐 Export in Multiple Formats</h3>
                <p>
                  Download your resume in PDF, Word, or shareable web format with ease.
                </p>
              </div>
            </div>
            <div className="card bg-base-300 shadow-lg">
              <div className="card-body">
                <h3 className="text-xl font-semibold">🧪 Real-Time Preview</h3>
                <p>
                  See changes live as you generate or customize resume sections in your browser.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
