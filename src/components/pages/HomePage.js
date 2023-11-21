import React from "react";
import BestSeller from "../organisms/BestSeller/BestSeller";
import HeroHeader from "../organisms/HeroHeader/HeroHeader";
import CustomerService from "../organisms/CustomerService/CustomerService";
import Category from "../organisms/Category/Category";

function HomePage() {
  return (
    <div>
      <HeroHeader
        title="HOLIDAY GIFTS"
        subtitleL1="For Everyone on"
        subtitleL2="Your List"
        link="products/womens-bags"
        linkText="Shop the Gift Guide"
      />
      <Category />
      <BestSeller />
      <CustomerService />;
    </div>
  );
}

export default HomePage;