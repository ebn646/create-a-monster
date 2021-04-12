import { useContext } from 'react';
import { MonsterContext } from "../MonsterContext";

function useMonsterCreator() {
    const [state, setState, copy, monsters] = useContext(MonsterContext);

    function goForward(){
        setState((state) => ({ ...state, currentStep: state.currentStep + 1}))
        setState((state) => ({ ...state, stepCopy: copy[state.currentStep]}))
    }

    function setMonsterType(id){
        setState((state) => ({ ...state, monsterType: monsters[id]}))
    }

    function goBack(){
        setState((state) => ({ ...state, currentStep: state.currentStep - 1}))
        setState((state) => ({ ...state, stepCopy: copy[state.currentStep]}))
    }

    function setMonsterColor (id){
        setState((state) => ({ ...state, monsterColor: id}))
    }

    function setMonsterLashes (id){
        setState((state) => ({ ...state, monsterLashes: id}))
    }

    function setMonsterHair (id){
        setState((state) => ({ ...state, monsterHair: id}))
    }

    return {
        monsterType: state.monsterType,
        currentStep: state.currentStep,
        stepCopy: state.stepCopy,
        monsterColor: state.monsterColor,
        monsterLashes: state.monsterLashes,
        monsterHair: state.monsterHair,
        goForward,
        goBack,
        setMonsterType,
        setMonsterColor,
        setMonsterLashes,
        setMonsterHair,
    }
}
export default useMonsterCreator;
