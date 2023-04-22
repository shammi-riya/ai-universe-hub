import React from 'react';
import Button from '../Button/Button';

const SingleData = (props) => {
    const { description, id, image, published_in, name, features
    } = props.singleData
    // console.log(props.singleData);
    return (
        <>
          
          <div className="card w-96 bg-base-100 shadow-xl text-left">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Features</h2>
                    {
                        features.map((feture, i) => <p>{i + 1}.{feture}</p>)
                    }
                    <h2 className="card-title">{name}</h2>
                    <hr className='border-2' />
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2'>

                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                            </svg>
                            </span>
                            <p>{published_in}</p>
                        </div>
                        
                        <label onClick={()=>props.setUnicId(id)}
                         htmlFor="my-modal-5" >
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                        </label>
        
                    </div>
                </div>
            </div>
        
        </>
    );
};

export default SingleData;