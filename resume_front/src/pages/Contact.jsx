import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen overflow-y-scroll scroll-hidden bg-base-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full text-center space-y-10">
        {/* Page Title */}
        <div className="badge badge-primary text-white text-lg p-4">📬 Contact & Feedback</div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          We'd Love to Hear From You!
        </h1>
        <p className="text-lg text-base-content">
          Whether you're using our AI-powered resume builder or just exploring, your feedback helps us grow.
          Reach out anytime or drop a message using the form below.
        </p>

        {/* Email Section */}
        <div className="text-base-content text-md">
          📧 Email us at: <span className="font-semibold text-dark">support@byteresume.ai</span>
        </div>

        {/* Feedback Form */}
        <div className="card bg-base-200 shadow-xl mt-6 p-6 text-left">
          <h2 className="text-2xl font-semibold mb-4 text-center">📝 Send Us Feedback</h2>
          <form className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input type="text" placeholder="John Doe" className="input input-bordered w-full" />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input type="email" placeholder="you@example.com" className="input input-bordered w-full" />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Your Message</span>
              </label>
              <textarea className="textarea textarea-bordered w-full" rows="4" placeholder="Write your feedback here..."></textarea>
            </div>
            <div className="text-center">
              <button className="btn btn-accent">Send Feedback</button>
            </div>
          </form>
        </div>

        {/* Testimonials */}
        <div className="mt-16 space-y-6">
          <h2 className="text-3xl font-bold text-primary">💬 What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card bg-base-300 shadow-md">
              <div className="card-body">
                <p>
                  “The AI resume generator saved me hours of work. It’s accurate, fast,
                  and gave me real confidence before interviews.”
                </p>
                <div className="font-semibold mt-2">— Priya Shah, Software Developer</div>
              </div>
            </div>
            <div className="card bg-base-300 shadow-md">
              <div className="card-body">
                <p>
                  “I got interview calls within a week after using Byte Resume. The auto-suggestions
                  were on point and ATS-friendly!”
                </p>
                <div className="font-semibold mt-2">— Rahul Mehta, Data Analyst</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
