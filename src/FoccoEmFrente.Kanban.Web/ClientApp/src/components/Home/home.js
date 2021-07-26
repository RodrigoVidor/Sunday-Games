import React, { useState, useEffect } from "react";

function Titulo({texto, subtitle}) {
   //console.log("props", props);
   const upperText = texto.toUpperCase();

   return subtitle ? <h2>{upperText}</h2> 
                   : <h1>{upperText}</h1>

}

function Paragrafo({titulo, texto}) {

   return (
      <>
      <h1>{titulo}</h1>
      <p>{texto}</p>
      </>
   )
}

export default function Home() {

   const [title, setTitle] = useState("Meu componente");
   const [contador, setContador] = useState(0);

   const onChangeTitle = (event) => {
      setTitle(event.target.value);
   }

   useEffect(() => {
      setContador(contador +1)
   }, [title]);

   useEffect(() => {
      console.log("Iniciou")
   }, []);

   return (
      <div>
         <Titulo>{titulo}</Titulo>
         <Titulo subtitle></Titulo>
         <p>Count: {contador}</p>
         <input value={title} onChange={onChangeTitle} />
         <Paragrafo texto="Teste" titulo="Titulo" />
      </div>
   );
}
