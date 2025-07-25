import React from 'react';

const HolographicHouse: React.FC = () => {
  return (
    <div className="holographic-house-container">
      <div className="holographic-house">
        {/* Grid Foundation */}
        <div className="grid-foundation">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={`h-${i}`} className="grid-line-foundation horizontal" style={{ top: `${i * 8.33}%` }}></div>
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={`v-${i}`} className="grid-line-foundation vertical" style={{ left: `${i * 8.33}%` }}></div>
          ))}
        </div>
        
        {/* Main Building Structure */}
        <div className="building-structure">
          {/* Ground Floor */}
          <div className="building-floor ground-floor">
            <div className="floor-wall front">
              <div className="window-row">
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
              </div>
              <div className="entrance-area">
                <div className="entrance-door"></div>
                <div className="entrance-door"></div>
                <div className="entrance-door"></div>
              </div>
            </div>
            <div className="floor-wall back">
              <div className="window-row">
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
              </div>
            </div>
            <div className="floor-wall left">
              <div className="window-row">
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
              </div>
            </div>
            <div className="floor-wall right">
              <div className="window-row">
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
              </div>
            </div>
          </div>
          
          {/* Second Floor */}
          <div className="building-floor second-floor">
            <div className="floor-wall front">
              <div className="window-row">
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
              </div>
            </div>
            <div className="floor-wall back">
              <div className="window-row">
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
              </div>
            </div>
            <div className="floor-wall left">
              <div className="window-row">
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
              </div>
            </div>
            <div className="floor-wall right">
              <div className="window-row">
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
              </div>
            </div>
          </div>
          
          {/* Third Floor */}
          <div className="building-floor third-floor">
            <div className="floor-wall front">
              <div className="window-row">
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
              </div>
            </div>
            <div className="floor-wall back">
              <div className="window-row">
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
              </div>
            </div>
            <div className="floor-wall left">
              <div className="window-row">
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
              </div>
            </div>
            <div className="floor-wall right">
              <div className="window-row">
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
              </div>
            </div>
          </div>
          
          {/* Fourth Floor */}
          <div className="building-floor fourth-floor">
            <div className="floor-wall front">
              <div className="window-row">
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
              </div>
            </div>
            <div className="floor-wall back">
              <div className="window-row">
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
              </div>
            </div>
            <div className="floor-wall left">
              <div className="window-row">
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
              </div>
            </div>
            <div className="floor-wall right">
              <div className="window-row">
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
              </div>
            </div>
          </div>
          
          {/* Fifth Floor */}
          <div className="building-floor fifth-floor">
            <div className="floor-wall front">
              <div className="window-row">
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
              </div>
            </div>
            <div className="floor-wall back">
              <div className="window-row">
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
              </div>
            </div>
            <div className="floor-wall left">
              <div className="window-row">
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
              </div>
            </div>
            <div className="floor-wall right">
              <div className="window-row">
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
              </div>
            </div>
          </div>
          
          {/* Sixth Floor */}
          <div className="building-floor sixth-floor">
            <div className="floor-wall front">
              <div className="window-row">
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
              </div>
            </div>
            <div className="floor-wall back">
              <div className="window-row">
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
              </div>
            </div>
            <div className="floor-wall left">
              <div className="window-row">
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
              </div>
            </div>
            <div className="floor-wall right">
              <div className="window-row">
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
              </div>
            </div>
          </div>
          
          {/* Building Frame Lines */}
          <div className="building-frame">
            <div className="frame-line vertical-left"></div>
            <div className="frame-line vertical-right"></div>
            <div className="frame-line vertical-front-left"></div>
            <div className="frame-line vertical-front-right"></div>
            <div className="frame-line vertical-back-left"></div>
            <div className="frame-line vertical-back-right"></div>
            
            {/* Horizontal frame lines for each floor */}
            <div className="frame-line horizontal-ground"></div>
            <div className="frame-line horizontal-second"></div>
            <div className="frame-line horizontal-third"></div>
            <div className="frame-line horizontal-fourth"></div>
            <div className="frame-line horizontal-fifth"></div>
            <div className="frame-line horizontal-sixth"></div>
            <div className="frame-line horizontal-top"></div>
          </div>
          
          {/* Rooftop Structure */}
          <div className="building-rooftop">
            <div className="rooftop-edge front"></div>
            <div className="rooftop-edge back"></div>
            <div className="rooftop-edge left"></div>
            <div className="rooftop-edge right"></div>
            <div className="rooftop-corner corner-1"></div>
            <div className="rooftop-corner corner-2"></div>
            <div className="rooftop-corner corner-3"></div>
            <div className="rooftop-corner corner-4"></div>
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="particles">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}></div>
          ))}
        </div>
        
        {/* Scanning lines effect */}
        <div className="scan-lines">
          <div className="scan-line scan-1"></div>
          <div className="scan-line scan-2"></div>
          <div className="scan-line scan-3"></div>
        </div>
      </div>
    </div>
  );
};

export default HolographicHouse;