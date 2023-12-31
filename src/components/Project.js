import React from 'react';

const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-8'>
        <img className='rounded-2xl hover:scale-110' style={{maxWidth:"200px"}} src={item.image} alt='' />
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <p  className='capitalize text-neutral-200 text-sm mb-3'>{item.description}</p>
      <p  className='capitalize text-accent text-sm mb-3'>{item.link}</p>
        </div>
  );
};

export default Project;
