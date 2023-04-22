import React from 'react';

const Button = ({children}) => {
    return (
        <div className='py-6'>
            <button className='bg-slate-600 hover:bg-slate-500 rounded-lg px-4 py-3 text-white'>{children}</button>
        </div>
    );
};

export default Button;