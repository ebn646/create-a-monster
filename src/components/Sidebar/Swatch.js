import React from 'react'
import useMonsterCreator from "../../hooks/useMonsterCreator";

export default function Swatch({id, url}) {
    const {setMonsterColor} = useMonsterCreator();
    return (
         <button onClick={() => {setMonsterColor(id)}} id={id} ><img src={url} /></button>
    )
}
