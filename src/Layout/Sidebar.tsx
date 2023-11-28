import {Link} from 'react-router-dom'

import GeneSearch from './GeneSearch';
// import DarkModeToggle from './DarkModeToggle';

const Sidebar = () => {
  return (
    <aside className='top-0 bottom-0 bg-black text-slate-50 basis-1/3 p-8'>
      <Link to='/'>eplant</Link>
      <GeneSearch />
     <a href='http://bar.utoronto.ca/'>
        <img src='The BAR API' alt='The BAR API logo' />
      </a>
    </aside>
  );
};
export default Sidebar;
