import { useEffect } from 'react';
import Hero from '../sections/Hero';
import AboutAuthor from '../sections/AboutAuthor';
import WhatIsCosmere from '../sections/WhatIsCosmere';
import PathSelector from '../sections/PathSelector';
import ExploreWorlds from '../sections/ExploreWorlds';

export default function HomePage() {
  useEffect(() => {
    document.title = 'Descubra o Cosmere | Brandon Sanderson na Editora Trama';
  }, []);

  return (
    <>
      <Hero />
      <AboutAuthor />
      <WhatIsCosmere />
      <ExploreWorlds />
      <PathSelector />
    </>
  );
}
