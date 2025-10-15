import Aurora from './Aurora';
import Beams from './beams';
import './globals.css';
export default function HomePage() {
  return (
    <main >
      <div className="container">
      <div className="background-div" style={{ width: '100%', height: '600px'}}>
        <Beams
          beamWidth={2}
          beamHeight={30}
          beamNumber={12}
          lightColor="#fa181cff"
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
    </main>
  );
}