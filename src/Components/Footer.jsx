export default function Footer() {
  return (
    <footer className="bg-gray-200 p-4">
      <div className="container mx-auto">
        <div className="text-center text-gray-600">
          &copy; {new Date().getFullYear()} Your Website Name
        </div>
      </div>
    </footer>
  );
}
