
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductHero from '../components/product/ProductHero';
import ProductDescription from '../components/product/ProductDescription';
import SystemRequirements from '../components/product/SystemRequirements';
import PricingTable from '../components/product/PricingTable';
import ProductConsultation from '../components/product/ProductConsultation';

const Product1C = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        <ProductHero />
        <ProductDescription />
        <SystemRequirements />
        <PricingTable />
        <ProductConsultation />
      </main>

      <Footer />
    </div>
  );
};

export default Product1C;
