import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

// const searchMenu = [
//     'planets', 'spaceships', 'vehicles', 'people', 'films', 'species'
// ];

const Form = ({menu}) => {

    const [searchSelect, setSearchSelect] = useState('');
    const [searchSelectError, setSearchSelectError] = useState('');
    const [id, setId] = useState('');
    const [idError, setIdError] = useState('');
    const  navigate = useNavigate()
    const search = (e) => {
        e.preventDefault();
        if(searchSelect.length == 0){
            setSearchSelectError("Please make select from the menu ")
            setSearchSelect('') ; 
            return ; 
        }
        else{
            setSearchSelectError('') ;
        }
        if(id.length < 1){
            setIdError("Id is Required")
            
            return
        }
        else if(isNaN(id)){
            setIdError("Id must be a number ")
            setId('') ; 
            return
        }
        else{
            setIdError('')
        }
        let q = "/"+searchSelect+"/"+id;
        
        setId('');
        setSearchSelect('') ;
        setIdError(''); 
        setSearchSelectError('') 
        navigate(q); 
        
    }
    return (
        <div className='row d-flex justify-content-center my-5'>
            {searchSelectError.length>1 && <p className='error text-center'>{searchSelectError}</p>}
            {idError.length>1 && <p className='error text-center'>{idError}</p>}
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <form onSubmit={search} className='border border-sacendary rounded-2 p-4  d-flex justify-content-center align-items-center'>
                            <label className='h5' >Seach For:</label>
                            <select className='mx-2 mb-2' value={searchSelect} onChange={(e) => setSearchSelect(e.target.value)}>
                                <option value="">Select from here</option>
                                {
                                    menu.map((item,i) => <option key={i} value={item}>{item}</option>)
                                }
                            </select>
                            <label className='h5' >ID:</label>
                            <input className='mx-2 p-2' type="text" value={id} onChange={(e)=> setId(e.target.value)}/>
                            <button className='btn btn-primary'> Search </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Form
