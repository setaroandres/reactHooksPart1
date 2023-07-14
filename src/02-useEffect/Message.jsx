import { useEffect, useState } from "react";

export const Message = () => {

  const [coords, setCoords] = useState({x: 0, y: 0});

  //Podemos mostrar un mensaje o ejecutar algún metodo cuando el componente se monta o se desmonta
  useEffect(() => {

    const onMouseMove = ({x, y}) => {//Desesctructuranos y tomamos las coors desde el event
      //const coords = { x, y };
      setCoords({x, y});
    };
  
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    }
  }, []);
  
  return (
    <>
        <h3>Usuario ya existe</h3>
        <p>{JSON.stringify(coords)}</p>
    </>
  )
}
