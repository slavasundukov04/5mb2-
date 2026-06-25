import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Cases } from './pages/Cases';
import { CaseDetail } from './pages/CaseDetail';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { BlogArticle } from './pages/BlogArticle';
import { Contact } from './pages/Contact';
import { Prices } from './pages/Prices';
import { Sitemap } from './pages/Sitemap';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'services',
        Component: Services
      },
      {
        path: 'services/:slug',
        Component: ServiceDetail
      },
      {
        path: 'cases',
        Component: Cases
      },
      {
        path: 'cases/:id',
        Component: CaseDetail
      },
      {
        path: 'about',
        Component: About
      },
      {
        path: 'blog',
        Component: Blog
      },
      {
        path: 'blog/:slug',
        Component: BlogArticle
      },
      {
        path: 'contact',
        Component: Contact
      },
      {
        path: 'prices',
        Component: Prices
      },
      {
        path: 'sitemap',
        Component: Sitemap
      },
      {
        path: '*',
        Component: NotFound
      }
    ]
  }
]);