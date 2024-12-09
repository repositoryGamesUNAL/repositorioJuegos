import React from "react";
import Input from "../atoms/input/input";


const pruebaInput: React.FC = () => {



  return (
   



    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

  

    }}>

    
      <h1>Input Variations</h1>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '60px'
    


      }}>
      <p>Normal size</p>  
      <p>Small size</p>
    
      

      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px'
    


      }}>
      <p>Default </p>  
    
      <Input size="normal" placeholder="Default" />
      <Input size="small" placeholder="Default" />

      </div>
      <div>
      <Input  type="textarea"size="small" label="Label" placeholder="text area" maxLength={2} />
      </div>
      <div>
      <Input size="normal" error="Error text" placeholder="Error" />
      </div>
      <div>
      <Input size="small" disabled placeholder="Disabled" />
      </div>
      <div>
      <Input size="normal" active placeholder="Active" />
      </div>
      <div>
      <Input size="fixed" disabled placeholder="text area" type="textarea" />
      </div>
     
    </div>
  );
};

export default pruebaInput;
