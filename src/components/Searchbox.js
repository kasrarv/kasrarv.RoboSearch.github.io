import React from 'react';


const Searchbox = ({searchchange}) => {
    return (
    <div className='pa2'>

        <input 
        className='br4 pa2 ba bg-lightest-blue' 
        type='search' 
        placeholder='search robots'
        onChange={searchchange}
        
         />

        </div>
    );
}

export default Searchbox;