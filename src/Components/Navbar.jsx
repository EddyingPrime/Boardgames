export default function Navbar() {
  return (
    <>
     <nav className="bg-white border p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="src/assets/logo.png" alt="Logo" className="h-8" />
        </div>
          <div className="flex space-x-20">
            <a href="/" className="text-orange hover:underline">
              Home
            </a>
            <a href="/games" className="text-orange hover:underline">
              Games
            </a>
            <a href="/cafe" className="text-orange hover:underline">
              Cafe
            </a>
            <a href="/forums" className="text-orange hover:underline">
              Forum
            </a>
          </div>
          <div className="space-x-4">
            <a href="/login" className="text-white text-lg font-medium whitespace-nowrap justify-center items-center rounded px-5 py-2 border">
              Log In
            </a>
            <a href="/register" className="text-white text-center text-lg font-medium whitespace-nowrap justify-center items-center rounded bg-orange px-5 py-2 border">
              Register
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
