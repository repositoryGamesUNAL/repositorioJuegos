import Headline from "../atoms/headlines/headlines"



const prueba: React.FC = () => {

return(
    <>

    <Headline level="h1" text="Titulo de prueba "></Headline>
    <Headline level="h2" text="Subtítulo de prueba "></Headline>
    <Headline level="h3" text="Subtítulo más pequeño de prueba "></Headline>
    <Headline level="h4" text="Subtítulo más pequeño más pequeño de prueba "></Headline>
    </>

);


}


export default prueba;