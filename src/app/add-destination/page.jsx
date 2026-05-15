import AddDestinationForm from '@/components/AddDestinationForm';
import React from 'react';

const AddDestinationPage = () => {
    return (
        <div className='p-10 w-7/12 mx-auto'>
            <h1 className='text-3xl font-bold text-cyan-500 text-center'>Add Destination</h1>
            <AddDestinationForm/>
            
        </div>
    );
};

export default AddDestinationPage;