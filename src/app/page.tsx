import Aurora from './Aurora';
// Correct default export
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
  <div className="relative w-0 h-0 border-1-[15px] border-r-[15px] border-b-[26px] border-1-transparent border-r-transparent border-b-black"/>
          <p className={`anataliased text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
          </p>
  </div>
  </main>);
}

