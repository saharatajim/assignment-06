import React from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Footer from './components/footer/Footer';
import Stats from './components/Stats/Stats.jsx';
import Workflow from './components/Workflow/Workflow';
import StepsSection from './components/StepsSection/StepsSection';
import PricingSection from './components/PricingSection/PricingSection';
const App = () => {

  return (
   <>
   <NavBar></NavBar>
   <Banner></Banner>
   <Stats></Stats>
   <StepsSection></StepsSection>
  <PricingSection></PricingSection>
   <Workflow></Workflow>
   <Footer></Footer>
   </>
  );
};

export default App;