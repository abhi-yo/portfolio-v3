"use client";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between py-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full border border-white/20 flex items-center justify-center">
          {/* Placeholder for profile photo */}
          <img 
            src="/profile.png" 
            alt="Akshat Singh"
            className="w-full h-full object-cover rounded-full"
            style={{ objectPosition: 'center' }}
          />
          {/* Replace above with: */}
          {/* <img 
            src="/path-to-your-profile-photo.jpg" 
            alt="Akshat Singh"
            className="w-full h-full object-cover rounded-full"
          /> */}
        </div>
        <h1 className="text-2xl font-bold text-white">Akshat Singh</h1>
      </div>
      <nav>
        <a href="/blog" className="text-white text-2xl font-bold hover:text-cyan-400 transition-colors">
          Blog
        </a>
      </nav>
    </header>
  );
};

export default Navbar; 