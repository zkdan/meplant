import axios from 'axios';
import { useLocation,useNavigate,useSearchParams } from 'react-router-dom';
import AsyncSelect from 'react-select/async';

const GeneSearch = () => {
  const [_, setSearchParams] = useSearchParams();
  const isHome = useLocation().pathname === '/';
  const navigate = useNavigate();

  const getGeneOptions = async (inputValue: string) => {
    const url = `https://bar.utoronto.ca/eplant/cgi-bin/idautocomplete.cgi?species=Arabidopsis_thaliana&term=${inputValue}`;
    const genes = await axios.get(url).then((res) => res.data);
    const genesAsOptions = genes.map((gene: string) => {
      return { value: gene, label: gene };
    });
    return genesAsOptions;
  };

  const promiseOptions = (inputValue: string) => {
    return getGeneOptions(inputValue);
  };

  interface IGeneAsOption{
    value:string;
    label:string;
  }
  const updateGene = (gene:IGeneAsOption) => {
    const newParams = new URLSearchParams({ id: gene.value })
    if(isHome){
      navigate(`/gene-info?${newParams}`)
    } else {
      setSearchParams(newParams);
    }
  };

  return (
    <form onSubmit={(e)=>e.preventDefault()} className='text-black'>
      <label htmlFor='gene-select' className='sr-only' >Search by gene name</label>
      <AsyncSelect
        id='gene-select'
        // isMulti
        placeholder={'Search by gene name'}
        cacheOptions
        defaultOptions
        loadOptions={promiseOptions}
        onChange={(gene) => updateGene(gene)}
      />
    </form>
  );
};
export default GeneSearch;

// Select docs at https://react-select.com/
