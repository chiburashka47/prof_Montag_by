import React from "react";
import Header from "../Header/header";
import StartPage from "./Components/StartPage/startPage";
import Promotions from "./Components/Promotions/promotions";
import OurWorks from "./Components/OurWorks/ourWorks";
import PriceCalc from "./Components/PriceCalc/priceCalc";
import Certifications from "./Components/Certifications/certifications";
import Contacts from "./Components/Contacts/contacts";
import Footer from "./Components/Footer/footer";
import OurAdvantages from "./Components/OurAdvantages/ourAdvantages";

export default function MainPage() {
  return (
    <div className="mainPage">
      <Header />
      <StartPage />
      <Promotions />
      <OurAdvantages/>
      <OurWorks />
      <PriceCalc />
      <Certifications />
      <Contacts />
      <Footer />
    </div>
  );
}
