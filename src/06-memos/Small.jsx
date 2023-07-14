import { memo } from "react";//El memo lo utilizamos solo cuando queremos que un componente no queremos que se redibuje si no tiene actualizaciones.
//Se suele utilizar para componentes grandes. Se usa para memorizar el componente y solo se re renderiza cuando se cambian las properties.


export const Small = memo(({value}) => {

    console.log('Me volvi a dibujar :(')

    return (
        <small>{value}</small>
    )
});
