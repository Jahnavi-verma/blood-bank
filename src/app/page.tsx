import Aurora from './Aurora';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div>
        <Aurora
          colorStops={["#660001", "#013221", "#00563E"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black">
        <p className="antialiased text-xl text-gray-800 md:text-3xl md:leading-normal">
          Welcome to the Blood Bank Management System. Please log in or sign up to continue.
        </p>
      </div>
    </main>
  );
}

