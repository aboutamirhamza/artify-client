import React from "react";
import { Link } from "react-router";

const Error404 = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-950 via-indigo-800 to-purple-800 text-white p-6">

      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -left-40 -top-40 w-96 h-96 rounded-full bg-linear-to-r from-pink-500 to-yellow-400 opacity-20 blur-3xl animate-blob" />
        <div className="absolute -right-32 -bottom-32 w-80 h-80 rounded-full bg-linear-to-r from-cyan-400 to-blue-600 opacity-15 blur-2xl animate-blob animation-delay-2000" />
      </div>

      <section className="container mx-auto flex flex-col items-center justify-center">
        <div className="p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="rounded-lg p-3 bg-linear-to-br from-white/10 to-white/5 border border-white/5">

              <svg width="92" height="92" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="7" width="18" height="11" rx="2" stroke="white" strokeOpacity="0.9" strokeWidth="0.9" />
                <circle cx="8.5" cy="11.5" r="1.2" fill="white" />
                <circle cx="15.5" cy="11.5" r="1.2" fill="white" />
                <path d="M9 16.2c.6.4 1.4.7 3 .7s2.4-.3 3-.7" stroke="white" strokeOpacity="0.9" strokeWidth="0.9" strokeLinecap="round" />
                <path d="M7 4.5h10" stroke="white" strokeOpacity="0.6" strokeWidth="1" strokeLinecap="round" />
                <path d="M11 2v2" stroke="white" strokeOpacity="0.6" strokeWidth="1" strokeLinecap="round" />
                <path d="M13 2v2" stroke="white" strokeOpacity="0.6" strokeWidth="1" strokeLinecap="round" />
                <g opacity="0.06">
                  <rect x="3" y="7" width="18" height="11" rx="2" fill="white" />
                </g>
              </svg>
            </div>

            <div>
              <h1 className="text-4xl font-extrabold tracking-tight">404</h1>
              <p className="mt-1 text-lg text-white/80">Page not found</p>
            </div>
          </div>

          <p className="mt-6 text-white/75 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 transition"
              aria-label="Go home"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
                <path d="M3 10.5L12 4l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10.5z" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back To Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Error404;