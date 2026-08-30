import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import HomePage from './pages/HomePage';

const ScadrialSection = lazy(() => import('./sections/ScadrialSection'));
const RosharSection = lazy(() => import('./sections/RosharSection'));
const NalthisSection = lazy(() => import('./sections/NalthisSection'));
const SecretProjects = lazy(() => import('./sections/SecretProjects'));
const ReadingJourney = lazy(() => import('./sections/ReadingJourney'));
const TramaLibrary = lazy(() => import('./sections/TramaLibrary'));
const ContentHub = lazy(() => import('./sections/ContentHub'));
const ArticlePage = lazy(() => import('./sections/ArticlePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function RouteFallback() {
  return (
    <span className="visually-hidden" role="status">
      Carregando página…
    </span>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/scadrial"
          element={
            <Suspense fallback={<RouteFallback />}>
              <ScadrialSection />
            </Suspense>
          }
        />
        <Route
          path="/roshar"
          element={
            <Suspense fallback={<RouteFallback />}>
              <RosharSection />
            </Suspense>
          }
        />
        <Route
          path="/nalthis"
          element={
            <Suspense fallback={<RouteFallback />}>
              <NalthisSection />
            </Suspense>
          }
        />
        <Route
          path="/projetos-secretos"
          element={
            <Suspense fallback={<RouteFallback />}>
              <SecretProjects />
            </Suspense>
          }
        />
        <Route
          path="/jornada"
          element={
            <Suspense fallback={<RouteFallback />}>
              <ReadingJourney />
            </Suspense>
          }
        />
        <Route
          path="/biblioteca"
          element={
            <Suspense fallback={<RouteFallback />}>
              <TramaLibrary />
            </Suspense>
          }
        />
        <Route
          path="/arquivos"
          element={
            <Suspense fallback={<RouteFallback />}>
              <ContentHub />
            </Suspense>
          }
        />
        <Route
          path="/arquivos/:slug"
          element={
            <Suspense fallback={<RouteFallback />}>
              <ArticlePage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<RouteFallback />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
