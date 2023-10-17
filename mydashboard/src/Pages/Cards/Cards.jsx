import React from 'react'
import { useNavigate } from 'react-router-dom';

const Cards = () => {
  const navigate = useNavigate();

  return <div>
   <button style={{marginLeft:'200px'}} onClick={()=>[
       navigate("/cards/create")
   ]}>Create</button>
       <button style={{marginLeft:'200px'}} onClick={()=>[
       navigate("/cards/edit")
   ]}>Edit</button>
  </div>;
}

export default Cards