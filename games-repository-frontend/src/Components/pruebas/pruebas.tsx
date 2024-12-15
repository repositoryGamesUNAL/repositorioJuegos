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
    
      <Input size="normal" placeholder="Default" width={361} />
      <Input size="small" placeholder="Default"  width={361}/>

      </div>
      <div>
      <Input  type="textarea"size="small" label="Label" placeholder="text area" maxLength={2} width={361} />
      </div>
      <div>
      <Input size="normal" error="Error text" placeholder="Error"  width={361}/>
      </div>
      <div>
      <Input size="small" disabled placeholder="Disabled" width={361} />
      </div>
      <div>
      <Input size="normal" active placeholder="Active" width={361} />
      </div>
      <div>
      <Input size="normal" disabled placeholder="text" type="scroll"  width={361}/>
      </div>
     
    </div>
  );
};

export default pruebaInput;
