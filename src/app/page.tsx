'use client';
import Aurora from './Aurora';
import Beams from './beams';
import './globals.css';
import Dock from './dock';
import LoginButton from "./loginbutton";

export default function HomePage() {
  return (
    <main >
      <html>
        <body>
      <div className="container">
      <div className="background-div" style={{ width: '100%', height: '600px'}}>
        <Beams
          beamWidth={2}
          beamHeight={30}
          beamNumber={12}
          lightColor="#c96f70ff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>
      <p className="overlay-div">
        Welcome to the BloodLine. Please log in continue.
      </p>
      </div>
      <div>
        <LoginButton onClick={() => alert("Login clicked")} />
      </div>
      </body>
      </html>
    </main>
  );
}