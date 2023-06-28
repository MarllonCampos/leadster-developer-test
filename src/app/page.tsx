'use client';

import { Button } from '@/components/Button';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LeadGeneration from '@/components/LeadGeneration';
import Presentation from '@/components/Presentation';
export default function Home() {
  return (
    <>
      <Header />
      <Presentation />
      <LeadGeneration />
      <Footer />
    </>
  );
}
