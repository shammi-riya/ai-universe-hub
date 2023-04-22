import React from 'react';

const Modal = ({ modalData }) => {
    console.log(modalData);
    const { description, image_link, integrations, tool_name, accuracy, features,input_output_examples, pricing  } = modalData;

    

    return (
        <div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl p-5">

                    <div className='flex justify-between px-5 gap-7 py-4'>
                        <div className='border-2 border-gray-300 p-5'>
                            <h3 className='text-2xl font-semibold'>{description}</h3>
                            <div className=' flex gap-4 py-6'>
                                {
                                    pricing && pricing.map(singlepricing => <div key={singlepricing.id} className=''>
                                        <div className='p-5 shadow-lg'>
                                            <p >{singlepricing.plan} {singlepricing.price}</p>
                                        </div>

                                    </div>
                                    )
                                }
                            </div>

                            < div className='flex justify-between px-4 text-left'>
                                <div>
                                    <h4 className='font-bold text-xl'>Feature</h4>
                                    {
                                        Object.values(features || {}).map((valu) => (<li>{valu.feature_name}</li>))
                                    }
                                </div>
                                <div>
                                    <h4 className='text-xl font-bold'>Intreegration</h4>
                                    {
                                        integrations && integrations.map(item => <li>{item}</li>)
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='border-2 border-gray-300'>
                           
                           <div className='relative'>
                           <img className='' 
                             src={image_link && image_link[0]} alt="" />
                              <p className='absolute top-0 right-0 bg-red-400 text-white py-2 px-3'>{accuracy &&accuracy.score*100}% Accouricy</p>
                           </div>
                            <div className='py-4'>
                                {
                                input_output_examples && input_output_examples.map(item => <p className='text-xl font-extralight'>{item.input}</p>)
                            }
                            </div>

                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
