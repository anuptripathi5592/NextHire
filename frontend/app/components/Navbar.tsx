export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 shadow-md">
      <h1 className="text-3xl font-bold text-blue-600">
        NextHire
      </h1>

      <div className="space-x-6">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">Jobs</a>
        <a href="#" className="hover:text-blue-600">Resume</a>
        <a href="#" className="hover:text-blue-600">Login</a>
      </div>
    </nav>
  );
}