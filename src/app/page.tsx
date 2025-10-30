'use client';
import Aurora from './Aurora';
import Beams from './beams';
import './globals.css';
import Dock from './dock';
import LoginButton from "./loginbutton";
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <div className="page-root">
        <div className="container">
          <div className="background-div" style={{ width: '100%', height: '600px' }}>
            <Beams
              beamWidth={3}
              beamHeight={30}
              beamNumber={12}
              lightColor="#F00F0F"    // changed from white to red 660001
              speed={2}
              noiseIntensity={5}
              scale={0.27}
              rotation={30}
            />

          </div>

          <div className="overlay-div">
            <p className="overlay-text">Welcome to the BloodLine. Please log in to continue.</p>

            <div className="button-row">
              <Link href="/login">
                <button className="your-button-class">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}