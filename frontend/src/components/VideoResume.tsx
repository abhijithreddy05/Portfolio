import React from 'react';
import { useNavigate } from 'react-router-dom';

const VideoResume = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-12">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-xl w-full flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Video Resume</h2>
        <video
          src="/video-resume.mp4"
          controls
          className="w-full rounded-lg shadow-lg mb-6 bg-black"
          style={{ maxHeight: 400 }}
        >
          Your browser does not support the video tag.
        </video>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow transition duration-300"
        >
          Back
        </button>
      </div>
    </section>
  );
};

export default VideoResume; 