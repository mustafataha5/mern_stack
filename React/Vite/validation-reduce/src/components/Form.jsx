import React, { useReducer } from 'react';
import './css/style.css' ; 


const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

function ValidateReducer(state, action) {
    switch (action.type) {
        case 'firstName':
            let firstNameError = '';
            if (action.value.length < 1) {
                firstNameError = 'First Name is required';
            } else if (action.value.length < 3) {
                firstNameError = 'First Name must be at least 3 characters';
            }
            return {
                ...state,
                firstName: { value: action.value, error: firstNameError }
            };
        case 'lastName':
            let lastNameError = '';
            if (action.value.length < 1) {
                lastNameError = 'Last Name is required';
            } else if (action.value.length < 3) {
                lastNameError = 'Last Name must be at least 3 characters';
            }
            return {
                ...state,
                lastName: { value: action.value, error: lastNameError }
            };
        case 'email':
            let emailError ; 
            if(action.value.length <1 ){
                emailError ="Email address is required" ; 
            }
            else if(action.value.length>2 && !ValidateEmail(action.value)){
                emailError ="Invalid Email address" ; 
            }
            return {
                ...state,
                email: { value: action.value, error:emailError }
            };
        default:
            throw new Error('Unknown action: ' + action.type);
    }
}
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    //alert("You have entered an invalid email address!")
    return (false)
}


const Form = (props) => {
    const [state, dispatch] = useReducer(ValidateReducer, initialState);

    const handleFirstNameChange = (e) => {
        dispatch({ type: 'firstName', value: e.target.value });
    };

    const handleLastNameChange = (e) => {
        dispatch({ type: 'lastName', value: e.target.value });
    };

    const handleEmailChange = (e) => {
        dispatch({ type: 'email', value: e.target.value });
    };

    return (
        <form className='border border-secondary p-3 '>
            <div className='my-3 d-flex align-items-center justify-content-between bg-primary text-white p-2'>
                <label className='mx-2' htmlFor='firstName'>First Name:</label>
                <input className='p-1' type='text' onChange={handleFirstNameChange} />
            </div>
            {state.firstName.error && <p className='error'>{state.firstName.error}</p>}
            
            <div className='my-3 d-flex align-items-center justify-content-between bg-primary text-white p-2'>
                <label className='mx-2' htmlFor='lastName'>Last Name:</label>
                <input className='p-1' type='text' value={state.lastName.value} onChange={handleLastNameChange} />
            </div>
            {state.lastName.error && <p className='error'>{state.lastName.error}</p> }
            <div className='my-3 d-flex align-items-center justify-content-between bg-primary text-white p-2'>
                <label className='mx-2' htmlFor='email'>Email:</label>
                <input className='p-1' type='text' value={state.email.value} onChange={handleEmailChange} />
            </div>
            {state.email.error && <p className='error'>{state.email.error}</p>}
        </form>
    );
};

export default Form;
