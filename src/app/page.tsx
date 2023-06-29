'use client';

import { Button } from '@/components/Button';
import Footer from '@/components/Sections/Footer';
import Header from '@/components/Header';
import LeadGeneration from '@/components/Sections/LeadGeneration';
import Presentation from '@/components/Sections/Presentation';
import VideosList from '@/components/Sections//VideosList';
export default function Home() {
  return (
    <>
      <Header />
      <Presentation />
      <VideosList />
      <LeadGeneration />
      <Footer />
    </>
  );
}
