import React, { useState } from "react";
import Toggler from "../atoms/toggle";

const App: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={{

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      
       

  
    }}>
      <h1>Toggler Example</h1>
      <Toggler
        isOn={isOn}
        withLabel
        onToggle={(newState) => setIsOn(newState)}
      />
      <Toggler
        isOn={isOn}
        onToggle={(newState) => setIsOn(newState)}
      />
      <Toggler
        isOn={isOn}
        disabled
        withLabel
        onToggle={(newState) => setIsOn(newState)}
      />
      
      <Toggler
      
        isOn={isOn}
        disabled={true}
        withLabel={true}
        


      
      
      />
      <Toggler
      
      isOn={isOn}
      disabled={true}
      withLabel={false}
      


    
    
    />
    
    </div>
  );
};

export default App;
