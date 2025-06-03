import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/app/ui/dashboard/header';
import Footer from '@/app/ui/dashboard/footer';

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Solar Panels */}
      <section className="relative w-full h-screen">
        <Image
          src="/images/home1.png"
          alt="Modern house with solar panels"
          fill
          className="object-cover"
        />
        <Navbar />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center ">
          <div className="mt-16">
            <h1 className="text-6xl font-bold text-white mb-1">Solar Panels</h1>
            <p className="text-xl text-white mb-6">Power Your Life</p>
            <p className="text-sm text-white mb-16">Move With Us To The Future</p>
            <div className="flex space-x-4 mt-8">
              <Link href="/toko" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-12 rounded">
                Order Now
              </Link>
              <Link href="/selengkapnya" className="bg-gray-800 bg-opacity-60 hover:bg-opacity-80 text-white py-2 px-12 rounded">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Megapack Section with Video Background */}
      <section className="relative w-full h-screen">
        {/* Video background instead of Image */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
          >
            <source src="/videos/home2.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <div>
            <h2 className="text-6xl font-bold text-white mb-1">Megapack</h2>
            <p className="text-xl text-white mb-6">Massive Energy Storage</p>
            <p className="text-sm text-white mb-16">Commercial & Utility Scale</p>
            <div className="flex space-x-4 mt-8">
              <Link href="/toko" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-12 rounded">
                Order Now
              </Link>
              <Link href="/selengkapnya" className="bg-gray-800 bg-opacity-60 hover:bg-opacity-80 text-white py-2 px-12 rounded">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Ce4L Section */}
      <section className="relative w-full h-screen">
        <Image
          src="/images/home3.png"
          alt="Solar panel field"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <div>
            <h2 className="text-6xl font-bold text-white mb-1">Ce4L Energy</h2>
            <p className="text-xl text-white mb-6">Power Your Future</p>
            <div className="flex space-x-4 mt-8">
              <Link href="/authentication/login" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-12 rounded">
                Join Ce4L
              </Link>
              <Link href="/selengkapnya" className="bg-gray-800 bg-opacity-60 hover:bg-opacity-80 text-white py-2 px-12 rounded">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// import AcmeLogo from '@/app/ui/acme-logo';
// import { ArrowRightIcon } from '@heroicons/react/24/outline';
// import Link from 'next/link';
// import styles from '@/app/ui/home.module.css';
// import { lusitana } from '@/app/ui/fonts';
// import Image from 'next/image';

// export default function Page() {
//   return (
//     <main className="flex min-h-screen flex-col p-6">
//       <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
//         <AcmeLogo />
//       </div>
//       <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
//         <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
//         <div className={styles.shape}/>
//           <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
//             <strong>Welcome to Acme.</strong> This is the example for the{' '}
//             <a href="https://nextjs.org/learn/" className="text-blue-500">
//               Next.js Learn Course
//             </a>
//             , brought to you by Vercel.
//           </p>
//           <Link
//             href="/login"
//             className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
//           >
//             <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
//           </Link>
//         </div>
//         <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
//           {/* Add Hero Images Here */}
//           <Image
//         src="/hero-desktop.png"
//         width={1000}
//         height={760}
//         className="hidden md:block"
//         alt="Screenshots of the dashboard project showing desktop version"
//       />
//       <Image
//         src="/hero-mobile.png"
//         width={560}
//         height={620}
//         className="block md:hidden"
//         alt="Screenshot of the dashboard project showing mobile version"
//       />
//         </div>
//       </div>
//     </main>
//   );
// }
