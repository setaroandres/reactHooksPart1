import { useLayoutEffect, useRef, useState } from "react"


export const Character = ({image, name, status}) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({width: 0, height: 0})

  useLayoutEffect(() => {//Se usa para cuando queremos ejecutar algo una vez que se renderiza todo el DOM
    const {height, width} = pRef.current.getBoundingClientRect();
    setBoxSize({
      height,
      width
    })
  }, [image])

  return (
    <>
      <div 
        className="blockquote"
        style={{display: "flex"}}>
          <img
            src={image} 
            alt={name} 
            />
      </div>

      <p className="blockquote-footer mt-2">
        <span ref={pRef}>{name}</span> - <span>{status}</span>
      </p>

      <footer className="mb-5">
        <code>
          {JSON.stringify(boxSize)}
        </code>
      </footer>
    </>
  )
}
