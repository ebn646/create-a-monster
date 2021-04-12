import React from 'react'
import useMonsterCreator from '../../hooks/useMonsterCreator'
export default function Header() {
    const { monsterType, stepCopy } = useMonsterCreator();

    return (
        <>
        <div style={{width: 330}}>
            <h3>
            {stepCopy.title}
            </h3>
            <p>
            {stepCopy.copy}
            </p>
        </div>
        {/* <div>
            {JSON.stringify(monsterType, null, 2)}
        </div> */}
        </>
    )
}
