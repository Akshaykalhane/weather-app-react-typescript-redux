import  { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchData } from '../../redux/getWeatherData';
import { AppDispatch } from '../../store';

import seachIcon from '../../assets/Component 32.svg';

function SearchForm() {

    const [search,setSearch]= useState<string>('');
    const dispatch = useDispatch<AppDispatch>();

    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
      setSearch(e.target.value);
    }
    
    const handleClick=()=>{
      dispatch(fetchData(search))
      setSearch('');
    }
    

  return (
    <>
        <div className="search-box">
            <input type="text" 
              name='city' 
              value={search} 
              onChange={handleChange} 
              placeholder="search city here" />
            <button 
              disabled={search==''} 
              onClick={()=>handleClick()}>
                <img style={search=='' ? {visibility:'hidden'} : {}} src={seachIcon} alt="" />
            </button>
        </div>
     </>
  )
}

export default SearchForm;