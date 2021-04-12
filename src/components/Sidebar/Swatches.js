import React from 'react';
import Swatch from './Swatch';
import useMonsterCreator from "../../hooks/useMonsterCreator";

export default function Swatches({list}) {
    const {monsterType} = useMonsterCreator();
    return (
        <div>
            {
                monsterType.swatches.colors.map((i) => {
                    return <Swatch key={i.id} id={i.id} url={i.url} />
                })
            }
        </div>
    )
}
