interface Waves2Props {
  className?: string;
}

export default function Waves2({ className = "" }: Waves2Props) {
  return (
    <div className={`relative w-full h-80 overflow-hidden ${className}`}>
      {/* White wave - Left aligned */}
      <div className="absolute top-0 left-0 h-full transform -translate-x-1/4 z-30">
        <svg 
          className="h-full w-full min-w-screen" 
          viewBox="0 0 1578 361" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMid slice"
          width="100%"
        >
          <path 
            d="M1578.34 240.39C976.4 277.549 826.621 219.325 660.629 154.799C528.818 103.56 386.784 48.347 0 33.7637V361.123L1578.34 361.123V240.39Z" 
            fill="white"
            style={{
              filter: "drop-shadow(4.35px -4.35px 21.77px rgba(0, 0, 0, 0.2))"
            }}
          />
        </svg>
      </div>

      {/* Dark green wave - Center aligned */}
      <div className="absolute top-0 left-1/2 h-full transform -translate-x-1/2 z-20">
        <svg 
          className="h-full w-full min-w-screen" 
          viewBox="0 0 1510 344" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <path 
            d="M55 344H1509.84V312.943C1289.78 291.88 1213.84 246.699 1141.19 203.476C1053.59 151.358 970.774 102.087 645.846 101.381C260.757 100.544 138.097 90.4707 55 80V344Z" 
            fill="#186635"
            style={{
              filter: "drop-shadow(-4.95px 2.47px 18.36px rgba(0, 0, 0, 0.1))"
            }}
          />
          <path 
            d="M55 344H1509.84V312.943C1289.78 291.88 1213.84 246.699 1141.19 203.476C1053.59 151.358 970.774 102.087 645.846 101.381C260.757 100.544 138.097 90.4707 55 80V344Z" 
            fill="url(#gradientDark)" 
            fillOpacity="0.1" 
            style={{ mixBlendMode: "multiply" }}
          />
          <defs>
            <linearGradient 
              id="gradientDark" 
              x1="678.567" 
              y1="105" 
              x2="678.567" 
              y2="301" 
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0"/>
              <stop offset="1"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Light green wave - Right aligned */}
      <div className="absolute top-0 right-0 h-full transform translate-x-1/4 z-10">
        <svg 
          className="h-full w-full min-w-screen" 
          viewBox="0 0 1893 420" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMaxYMid slice"
          width="100%"
        >
          <path 
            d="M1893.13 419.345V229.293C711.495 -73.1078 1243.26 412.642 27.1221 53.5369V419.345H1893.13Z" 
            fill="#28A656"
            style={{
              filter: "drop-shadow(2.41px -2.41px 12.03px rgba(0, 0, 0, 0.25))"
            }}
          />
          <path 
            d="M1893.13 419.345V229.293C711.495 -73.1078 1243.26 412.642 27.1221 53.5369V419.345H1893.13Z" 
            fill="url(#gradientLight)" 
            fillOpacity="0.2" 
            style={{ mixBlendMode: "multiply" }}
          />
          <defs>
            <linearGradient 
              id="gradientLight" 
              x1="1227.01" 
              y1="131.532" 
              x2="1229.24" 
              y2="298.507" 
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0"/>
              <stop offset="1"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
