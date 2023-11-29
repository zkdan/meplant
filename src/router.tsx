import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import App from './Layout/App';
import ErrorElement from './Layout/ErrorElement';
import GeneInfo, { getGeneInfo } from './Panes/GeneInfo';
import TissueExperiment from './Panes/TissueExperiment';
import Welcome from './Panes/Welcome';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index path='/' element={<Welcome />} />
      <Route
        path='gene-info'
        element={<GeneInfo />}
        loader={getGeneInfo}
        errorElement={<ErrorElement />}
      />
      <Route
        path='tissue-experiment'
        element={<TissueExperiment />}
        loader={async (el) => {
          const url = new URL(el.request.url);
          const term = url.searchParams.get('id');
          console.log(term);
          return 'hehe'
        }}
        errorElement={<ErrorElement />}
      />
      <Route path="*" element={<ErrorElement />} />
    </Route>
  ),
);

export const paneOptions = [
  {
    path: 'gene-info',
    displayName: 'Gene info viewer',
  },
  {
    path: 'tissue-experiment',
    displayName: 'Tissue & experiment viewer',
    description:'Visualize gene expression across multiple tissues and experiment samples.'
  },
  {
    path:'publication',
    displayName:'Publications',
    description:'Find publications that mention your gene of interest.'
  }
];
