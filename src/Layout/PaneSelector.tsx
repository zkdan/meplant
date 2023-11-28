import { Link, useSearchParams } from 'react-router-dom';

import { paneOptions } from '../router';

const PaneSelector = () => {
  return (
    <div className='dropdown'>
      <ul id='view-options' className='bg-gray-800 text-white  hover:text-black' aria-labelledby="dropdownHoverButton">
        {paneOptions.map((item) => {
          return (
            <Link to={`/${item.path}?${useSearchParams()[0]}`} className='grow-1 inline-block bg-gray-800 hover:bg-gray-600' key={item.displayName} >
              <li value={item.path} className='p-5'>
                  {item.displayName}
              </li>
              </Link>
          );
        })}
      </ul>


    </div>
  );
};
export default PaneSelector;
