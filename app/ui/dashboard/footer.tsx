import Link from 'next/link';
export default function Footer() {
    return (
      <footer className="bg-white p-6 mt-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lg text-black">CE4L © 2025</p>
            </div>
            <div className="flex space-x-4">
              <Link href="/profildiri" className="text-lg text-black hover:text-blue-600">About</Link>
              <Link href="/profiltoko" className="text-lg text-black hover:text-blue-600">Locations</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }