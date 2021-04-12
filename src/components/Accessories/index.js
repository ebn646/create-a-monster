import React from 'react';
import Swatches from '../Swatches';
import useMonsterCreator from '../../hooks/useMonsterCreator';

import './accessories.scss';

export default function Accessories() {
  const {monsterType} = useMonsterCreator();

    return (
        <div class="row">
        <div class="col">
          <div class="tabs">
            <div class="tab">
              <input type="checkbox" id="chck1" />
              <label class="tab-label" for="chck1">HAIR</label>
              <div class="tab-content">
                <Swatches type='hair' list={monsterType.swatches.hair} /> 
              </div>
            </div>
            <div class="tab">
              <input type="checkbox" id="chck2" />
              <label class="tab-label" for="chck2">EYELASHES</label>
              <div class="tab-content">
                <Swatches type='lashes' list={monsterType.swatches.eyelashes} /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
