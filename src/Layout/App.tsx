
import {Outlet} from 'react-router-dom';

import PaneSelector from './PaneSelector';
import Sidebar from './Sidebar';
function App() {
  return (
    <>
      <Sidebar/>
      <div className='pane grow-1 max-h-screen min-h-screen p-3 basis-2/3'>
        <PaneSelector />
        <Outlet />
      </div>
    </>
  );
}

export default App;
