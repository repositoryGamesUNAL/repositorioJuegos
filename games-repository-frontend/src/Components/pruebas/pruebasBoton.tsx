

import Button from '../atoms/button/button'




const pruebaBoton: React.FC = () => {
    return (
        <>
        <div>
        <div style={{ padding: '20px' }}>
          <h1 style={{
            fontFamily: "Open sans"
          }}>Button Demo</h1>
          <h2>Button Size</h2>
          
          <div style={{
            display:'flex',
            justifyContent:'center',
            gap:'20px'
    
          }}>
          <Button size="small" variant="main" status="default">Button</Button>
          
          <Button  size="medium" variant="main" status="default">Button</Button>
          </div >
          
         
          <h2> Main button Status</h2>
          <div style={{
            display:'flex',
            justifyContent:'center',
            gap:'3px'
    
          }} >
    
          <Button variant="main" status="default">Default</Button>
          <Button variant="main" status="hover">Hover</Button>
          <Button variant="main" status="click">Click</Button>
          <Button variant="main" status="disabled">Disabled</Button>
          </div>
          
          <h2>Secondary Buttons status </h2>
          <div style={{
            display:'flex',
            justifyContent:'center',
            gap:'3px'
    
          }} >
          <Button variant="secondary" status="default">Default</Button>
          <Button variant="secondary" status="hover">Hover</Button>
          <Button variant= "secondary" status= "click"> Click  </Button>
          <Button variant= "secondary" status= "disabled"> Disable  </Button>
    
          </div>
          
          <h2>Link Button</h2>
          <Button variant="link" status="default">Link in text</Button>
        </div>
    
    
    
    
    
        </div>
          
        </>)}
  
  export default pruebaBoton;