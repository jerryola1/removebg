"use client";

export default function AboutPage() {
  return (
    <div className="container">
      <h4 className="title">RemoveImg BG 🍎</h4>
      <div className="main-content flex justify-center py-4 md:py-8">
        {/* <div className="left-section">
          <div className="image-frame">
            <div className="image-container">
              <div className="placeholder">📝</div>
            </div>
          </div>
        </div> */}
        <div className="right-section w-full flex justify-center">
          <div
            className="polaroid-frame w-full max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl p-6 md:p-8 lg:p-10 shadow-xl flex flex-col bg-white"
            style={{ borderRadius: '10px' }}
          >
            <h2 
              className="font-bold mb-6 text-center text-gray-800"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}
            >
              About Us
            </h2>
            <div
              className="placeholder w-full text-gray-700 columns-1"
              style={{
                fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)',
                lineHeight: 1.75,
                overflowWrap: 'break-word',
                padding: '0.5rem'
              }}
            >
              <p className="mb-5">
                RemoveImg BG is a modern web application designed to make background removal from images fast, accurate, and accessible to everyone. Our goal is to provide a seamless and intuitive tool for users of all skill levels.
              </p>
              <p className="mb-5">
                Leveraging advanced AI technology through the Fal AI platform, the app allows users to upload any image and instantly receive a version with the background removed. This powerful processing happens behind the scenes, delivering clean results quickly.
              </p>
              <p className="mb-5">
                Built with Next.js and styled using Tailwind CSS, RemoveImg BG offers a responsive and visually appealing user experience. The application handles image uploads securely, processes them using a serverless API, and delivers high-quality results suitable for personal, professional, or creative use.
              </p>
              <p className="mb-5">
                The project demonstrates best practices in modern web development, including client-server separation, API integration, and a clean, maintainable codebase. It is developed and maintained by Abayomi Olagunju, with a focus on usability, performance, and reliability.
              </p>
              <p>
                Whether you are a designer, marketer, or casual user, RemoveImg BG streamlines the process of preparing images for presentations, social media, or any context where a clean, background-free image is needed.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer mt-8 md:mt-12">
        <p>🚀 Developed By <a href="https://www.linkedin.com/in/jerryola1/" target="_blank" rel="noopener noreferrer">Abayomi Olagunju</a> © 2024</p>
      </footer>
    </div>
  );
} 