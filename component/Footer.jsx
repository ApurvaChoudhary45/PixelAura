import React from 'react'
import { useSelector } from 'react-redux'
const Footer = () => {
  const daaark = useSelector(state => state.black.darkmode)
  return (
    <div>
      <footer className={`${daaark ? 'bg-black/80 text-white' : 'bg-white text-black/80'} py-10 mt-10 border-t border-white/10 backdrop-blur-md`}>
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* App Info */}
    <div>
      <h2 className="text-xl font-bold mb-2">PixelAura</h2>
      <p className="text-sm text-gray-400">
        Discover stunning wallpapers from Unsplash. Handpicked, high-quality visuals for your screens.
      </p>
    </div>

    {/* Links */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-pink-400 transition">Home</a></li>
        <li><a href="#" className="hover:text-pink-400 transition">Explore</a></li>
        <li><a href="#" className="hover:text-pink-400 transition">Favorites</a></li>
        <li><a href="#" className="hover:text-pink-400 transition">Contact</a></li>
      </ul>
    </div>

    {/* Credits */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Credits</h3>
      <p className="text-sm text-gray-400">
        Images powered by <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-400">Unsplash API</a>.
      </p>
      <p className="text-sm text-gray-500 mt-2">&copy; {new Date().getFullYear()} PixelAura. All rights reserved.</p>
    </div>

  </div>
</footer>

    </div>
  )
}

export default Footer
