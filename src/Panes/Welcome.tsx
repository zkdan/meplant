import {Link} from 'react-router-dom'

import {paneOptions} from '../router'

const Welcome = () => {
  return (
    <section className='pane bg-slate-600'>
      <h1>Welcome to ePlant</h1>
      <p>Choose a gene to get started or check out the viewers:</p>
      <ul className='flex flex-wrap'>
        {paneOptions.map(option => 
        <li className='border-gray-200 basis-1/3 border-2 rounded-sm' key={option.path}>
            <Link to={`/${option.path}`} className='flex'>
              <img src="https://place-hold.it/300" alt="" />
            </Link>
              <p  key={option.path}>{option.displayName}</p>
              <p>{option.description}</p>
        </li>)}
      </ul>
    </section>
  );
};
export default Welcome;
