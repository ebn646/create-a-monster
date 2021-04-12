import React from 'react';
import useMonsterCreator from '../../hooks/useMonsterCreator';

import './navigation.scss';

export default function Navigation() {
    const { goForward, goBack } = useMonsterCreator();
    return (
        <div className="navigation">
             <button onClick={goBack}>Previous</button>
             <button onClick={goForward}>Next</button>
        </div>
    )
}
