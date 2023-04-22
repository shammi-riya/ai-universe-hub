import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const Card = () => {
    const [data ,setData] = useState([]);
    const [showAll ,setShowAll] = useState(true)
    const [unicId,setUnicId] = useState(null)
    const [modalData,setModalData] = useState([])

     const handleShortDate = ()=>{
           const shortDate = data.sort((a,b)=>{
             return new Date (a.published_in) - new Date (b.published_in);      
           })

           setData([...data,shortDate])
     }




    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${unicId}`)
        .then(res=>res.json())
        .then(data=>setModalData(data.data))
          
       },[unicId])
   


    useEffect(()=>{
     fetch("https://openapi.programming-hero.com/api/ai/tools")
     .then(res=>res.json())
     .then(data=>setData(data.data.tools))
       
    },[])


    return (
       <div>
       <span onClick={handleShortDate}><Button>Short By Date</Button></span>
      <div className='grid lg:grid-cols-3 gap-7 md:grid-cols-2'>
            {
            data.slice(0,showAll?6:12).map(singleData=>
                <SingleData
                 singleData={singleData}
                 setUnicId = {setUnicId}
                 key={singleData.id}
                >

                </SingleData>)
            }
        </div>
       { showAll &&
        <span onClick={()=>setShowAll(false)}> <Button>see more</Button></span>
       }
       <Modal
       modalData={modalData}
       ></Modal>
       </div>

    );
};

export default Card;