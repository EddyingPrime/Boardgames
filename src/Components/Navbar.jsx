export default function Navbar() {
  return (
    <>
      <nav className="bg-blue-400 p-4">
        <div className="flex items-center justify-between tablet: mx-20">
          <div className="flex items-center">
            <a href="/" className="text-white text-2xl font-semibold">
              Touch Grass
            </a>
          </div>
          <div className="flex space-x-20">
            <a href="/" className="text-white">
              Home
            </a>
            <a href="/forums" className="text-white">
              Forums
            </a>
            <a href="/cafe" className="text-white">
              Cafe
            </a>
          </div>
          <div className="space-x-4">
            <a href="/login" className="text-white">
              Log In
            </a>
            <a href="/register" className="text-white">
              Register
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
