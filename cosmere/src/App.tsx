import { Route, Routes } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import HomePage from './pages/HomePage';
import ScadrialSection from './sections/ScadrialSection';
import RosharSection from './sections/RosharSection';
import NalthisSection from './sections/NalthisSection';
import SecretProjects from './sections/SecretProjects';
import ReadingJourney from './sections/ReadingJourney';
import TramaLibrary from './sections/TramaLibrary';
import ContentHub from './sections/ContentHub';
import ArticlePage from './sections/ArticlePage';

export default function App() {
  return <Routes><Route element={<RootLayout />}>
    <Route path="/" element={<HomePage />} />
    <Route path="/scadrial" element={<ScadrialSection />} />
    <Route path="/roshar" element={<RosharSection />} />
    <Route path="/nalthis" element={<NalthisSection />} />
    <Route path="/projetos-secretos" element={<SecretProjects />} />
    <Route path="/jornada" element={<ReadingJourney />} />
    <Route path="/biblioteca" element={<TramaLibrary />} />
    <Route path="/arquivos" element={<ContentHub />} />
    <Route path="/arquivos/:slug" element={<ArticlePage />} />
  </Route></Routes>;
}
