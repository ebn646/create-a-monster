import React, {useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
    useLocation
  } from "react-router-dom";
  import Sidebar from './Sidebar';
  import Navigation from './Navigation/Navigation';
  import Monster from './Monster';
  import ProgressBar from './ProgressBar';
  import Accessories from './Accessories';
  import Background from './Background';
  import Banner from './Banner';
  import ImageSlider from './ImageSlider';
  import useMonsterCreator from '../hooks/useMonsterCreator';

function Home({history}) {
    const location = useLocation();
    const { currentStep } = useMonsterCreator()

useEffect(() => {
    console.log('route has been changed');
},[location.pathname]);

useEffect(() => {
    console.log('currentStep changed',currentStep);
},[currentStep]);

    return (
        <div className="home">
            <Banner />
            <div style={{display: 'flex', justifyContent: 'center'}}>
               <ProgressBar />
            </div>
            {
                currentStep === 1 && (
                    <ImageSlider/>
                )
            }
            {
                currentStep !== 1 && (
                    <Monster /> 
                )
            }
            <Sidebar />
            {/* <Background /> */}
            <Navigation />
        </div>
    )
}

export default withRouter(Home);
