import React, { useState } from 'react';

const MonsterContext = React.createContext([{}, () => {}]);

const copy = {
    1: {
       
        title: 'Choose Your Monster',
        copy: 'Use the blue arrows to see the different monster body types. When you\'ve found a monster you like, click the Next button.',
    },
    2: {
        title: 'Choose Your Color',
        copy: 'Select what color your monster should be.',
    },
    3: {
        title: 'Customize Your Monster',
        copy: 'Add accessories to your monster- choose from the options below.',
    },
    4: {
        title: 'step 4 Title',
        copy: 'step 4 copy.',
    },
    5: {
        title: 'step 5 Title',
        copy: 'step 5 copy.',
    },
}

const monsters = {
    1:{
        id: 'type1',
        url: '../../images/monsters/type1/skin/colors/body_col_1.png',
        colors: [
            {
                id: 1,
                url:'../../images/monsters/type1/skin/colors/body_col_1.png'
            },
            {
                id: 2,
                url:'../../images/monsters/type1/skin/colors/body_col_2.png'
            },
            {
                id: 3,
                url:'../../images/monsters/type1/skin/colors/body_col_3.png'
            }
        ],
        eyelashes: [
            {
                id: 1,
                url:'../../images/monsters/type1/skin/eyelashes/eye_1.png'
            }
        ],
        hair: [
            {
                id: 1,
                url:'../../images/monsters/type1/skin/hair/hair_1.png'
            },
            {
                id: 2,
                url:'../../images/monsters/type1/skin/hair/hair_2.png'
            },
            {
                id: 3,
                url:'../../images/monsters/type1/skin/hair/hair_3.png'
            },
            {
                id: 4,
                url:'../../images/monsters/type1/skin/hair/hair_4.png'
            },
            {
                id: 5,
                url:'../../images/monsters/type1/skin/hair/hair_5.png'
            }
        ],
        swatches: {
            colors: [
                {
                    id: 1,
                    url: '../../images/monsters/type1/thumbnails/skin/colors/body_col_1.png'
                },
                {
                    id: 2,
                    url: '../../images/monsters/type1/thumbnails/skin/colors/body_col_2.png'
                },
                {
                    id: 3,
                    url: '../../images/monsters/type1/thumbnails/skin/colors/body_col_3.png'
                }
            ],
            hair: [
                {
                    id: 1,
                    url: '../../images/monsters/type1/thumbnails/skin/hair/hair_1.png'
                },
                {
                    id: 2,
                    url: '../../images/monsters/type1/thumbnails/skin/hair/hair_2.png'
                },
                {
                    id: 3,
                    url: '../../images/monsters/type1/thumbnails/skin/hair/hair_3.png'
                }
            ],
            eyelashes: [
                {
                    id: 1,
                    url: '../../images/monsters/type1/thumbnails/skin/eyelashes/eye_1.png'
                }
            ]
        }
    },
    2:{
        id: 'type2',
        url: '../../images/monsters/type2/skin/colors/body_col_1.png',
        colors: [
            {
                id: 1,
                url:'../../images/monsters/type2/skin/colors/body_col_1.png'
            },
            {
                id: 2,
                url:'../../images/monsters/type2/skin/colors/body_col_2.png'
            },
            {
                id: 3,
                url:'../../images/monsters/type2/skin/colors/body_col_3.png'
            }
        ],
        eyelashes: [
            {
                id: 1,
                url:'../../images/monsters/type2/skin/eyelashes/eye_1.png'
            },
            {
                id: 2,
                url:'../../images/monsters/type2/skin/eyelashes/eye_2.png'
            }
        ],
        hair: [
            {
                id: 1,
                url: '../../images/monsters/type2/skin/hair/hair_1.png'
            },
            {
                id: 2,
                url: '../../images/monsters/type2/skin/hair/hair_2.png'
            },
            {
                id: 3,
                url: '../../images/monsters/type2/skin/hair/hair_3.png'
            },
            {
                id: 4,
                url: '../../images/monsters/type2/skin/hair/hair_4.png'
            },
            {
                id: 5,
                url: '../../images/monsters/type2/skin/hair/hair_5.png'
            }
        ],
        swatches: {
            colors: [
                {
                    id: 1,
                    url: '../../images/monsters/type2/thumbnails/skin/colors/body_col_1.png'
                },
                {
                    id: 2,
                    url: '../../images/monsters/type2/thumbnails/skin/colors/body_col_2.png'
                },
                {
                    id: 3,
                    url: '../../images/monsters/type2/thumbnails/skin/colors/body_col_3.png'
                }
            ],
            hair: [
                {
                    id: 1,
                    url: '../../images/monsters/type2/thumbnails/skin/hair/hair_1.png'
                },
                {
                    id: 2,
                    url: '../../images/monsters/type2/thumbnails/skin/hair/hair_2.png'
                },
                {
                    id: 3,
                    url: '../../images/monsters/type2/thumbnails/skin/hair/hair_3.png'
                },
                {
                    id: 4,
                    url: '../../images/monsters/type2/thumbnails/skin/hair/hair_4.png'
                },
                {
                    id: 5,
                    url: '../../images/monsters/type2/thumbnails/skin/hair/hair_5.png'
                }
            ],
            eyelashes: [
                {
                    id: 1,
                    url: '../../images/monsters/type2/thumbnails/skin/eyelashes/eye_1.png'
                },
                {
                    id: 2,
                    url: '../../images/monsters/type2/thumbnails/skin/eyelashes/eye_2.png'
                },
                   
            ]
        }
    },
    3:{
        id: 'type3',
        url: '../../images/monsters/type3/skin/colors/body_col_1.png',
        colors: [
            {
                id: 1,
                url:'../../images/monsters/type3/skin/colors/body_col_1.png'
            },
            {
                id: 2,
                url:'../../images/monsters/type3/skin/colors/body_col_2.png'
            },
            {
                id: 3,
                url:'../../images/monsters/type3/skin/colors/body_col_3.png'
            }
        ],
        eyelashes: [
            {
                id: 1,
                url:'../../images/monsters/type3/skin/eyelashes/eye_1.png'
            },
            {
                id: 2,
                url:'../../images/monsters/type3/skin/eyelashes/eye_2.png'
            }
        ],
        hair: [
            {
                id: 1,
                url: '../../images/monsters/type3/skin/hair/hair_1.png'
            },
            {
                id: 2,
                url: '../../images/monsters/type3/skin/hair/hair_2.png'
            },
            {
                id: 3,
                url: '../../images/monsters/type3/skin/hair/hair_3.png'
            },
            {
                id: 4,
                url: '../../images/monsters/type3/skin/hair/hair_4.png'
            },
            {
                id: 5,
                url: '../../images/monsters/type3/skin/hair/hair_5.png'
            }
        ],
        swatches: {
            colors: [
                {
                    id: 1,
                    url: '../../images/monsters/type3/thumbnails/skin/colors/body_col_1.png'
                },
                {
                    id: 2,
                    url: '../../images/monsters/type3/thumbnails/skin/colors/body_col_2.png'
                },
                {
                    id: 3,
                    url: '../../images/monsters/type3/thumbnails/skin/colors/body_col_3.png'
                }
            ],
            hair: [
                {
                    id: 1,
                    url: '../../images/monsters/type3/thumbnails/skin/hair/hair_1.png'
                },
                {
                    id: 2,
                    url: '../../images/monsters/type3/thumbnails/skin/hair/hair_2.png'
                },
                {
                    id: 3,
                    url: '../../images/monsters/type3/thumbnails/skin/hair/hair_3.png'
                },
                {
                    id: 4,
                    url: '../../images/monsters/type3/thumbnails/skin/hair/hair_4.png'
                },
                {
                    id: 5,
                    url: '../../images/monsters/type3/thumbnails/skin/hair/hair_5.png'
                }
            ],
            eyelashes: [
                {
                    id: 1,
                    url: '../../images/monsters/type3/thumbnails/skin/eyelashes/eye_1.png'
                },
                {
                    id: 2,
                    url: '../../images/monsters/type3/thumbnails/skin/eyelashes/eye_2.png'
                },
                   
            ]
        }
    },
    // 4:{
    //     id: 'type4',
    //     url: '../../images/monsters/type4/skin/colors/body_col_1.png'
    // },
    // 5:{
    //     id: 'type5',
    //     url: '../../images/monsters/type5/skin/colors/body_col_1.png'
    // }
}

const MonsterProvider = (props) => {
  const [state, setState] = useState({
    currentStep: 1,
    stepCopy: copy[1],
    monsterType: monsters[1],
    monsterColor: 1,
    monsterLashes: '',
    monsterHair: '',
  });
  return (
    <MonsterContext.Provider value={[state, setState, copy, monsters]}>
      {props.children}
    </MonsterContext.Provider>
  );
};

export { MonsterContext, MonsterProvider };