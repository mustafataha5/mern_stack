import { useState } from "react";
import styles from './css/UserForm.module.css';

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");

    //---------------Errors State---------------------------
    const [firstNameError, setFirstNameError] = useState("");
    const [latNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confPasswordError, setConfPasswordError] = useState("");
    //------------------------------------------------------
    const handleName = (e, nameType) => {
        if (nameType === "firstname") {
            setFirstName(e.target.value);
            if (e.target.value.length < 1) {
                setFirstNameError("First name is required!");
            } else if (e.target.value.length < 2) {
                setFirstNameError("First name must be 2 characters or longer!");
            } else {
                // an empty string is considered a "falsy" value
                setFirstNameError("");
            }
        }
        else if (nameType === 'lastname') {
            setLastName(e.target.value);
            if (e.target.value.length < 1) {
                setLastNameError("Last name is required!");
            } else if (e.target.value.length < 2) {
                setLastNameError("Last name must be 2 characters or longer!");
            } else {
                // an empty string is considered a "falsy" value
                setLastNameError("");
            }
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if (e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters.");
        } else {
            // an empty string is considered a "falsy" value
            setLastNameError("");
        }
    };

    const handlePassword = (e) => {
        setPassword(e.target.value) ; 
        if(e.target.value.length < 1 ){
            setPasswordError("Password is required!")
        }
        else if(e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters")
        }
        else{
            setPasswordError("") ; 
        }
    } ;
    const handleConfPassword = (e) => {
        setConfPassword(e.target.value) ; 
        if(e.target.value.length < 1 ){
            setConfPasswordError("Confirm Password is required!")
        }
        else if(e.target.value.length < 8){
            setConfPasswordError("Confirm Password must be at least 8 characters")
        }
        else if(password !== e.target.value ){
            setConfPasswordError("Confirm Password must Match with password")
        }
        else{
            setConfPasswordError("") ; 
        }
    } ;
    //-------------------------------------------------------
    const createUser = (e) => {
        e.preventDefault();
        const newUser = {
            firstName,
            lastName,
            email,
            password,
            confPassword,
        }
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfPassword("")
    };
    return (
        <>
            <form onSubmit={createUser}>

                <div className="d-flex justify-content-between  bg-light py-3 px-4 my-3 text-black-50 rounded border border-1">
                    <label>First name: </label>
                    <input type="text" onChange={(e) => handleName(e, "firstname")} value={firstName} />
                </div>
                {
                    firstNameError ? <p className={styles.myerror}>{firstNameError}</p> : ''
                }
                <div className="d-flex justify-content-between align-items-center bg-light py-3 px-4 my-3 text-black-50 rounded border border-1">

                    <label>Last name: </label>
                    <input type="text" onChange={(e) => handleName(e, "lastname")} value={lastName} />
                </div>
                {
                    latNameError ? <p className={styles.myerror}>{latNameError}</p> : ''
                }
                <div className="d-flex justify-content-between bg-light py-3 px-4 my-3 text-black-50 rounded border border-1">

                    <label>Email Address: </label>
                    <input type="text" onChange={handleEmail} value={email} />
                </div>
                {
                    emailError ? <p className={styles.myerror}>{emailError}</p> : ''
                }
                <div className="d-flex justify-content-between bg-light py-3 px-4 my-3 text-black-50 rounded border border-1">
                    <label>Password: </label>
                    <input type="text" onChange={handlePassword} value={password} />
                </div>
                {
                    passwordError ? <p className={styles.myerror}>{passwordError}</p> : ''
                }
                <div className="d-flex justify-content-between bg-light py-3 px-4 my-3 text-black-50 rounded border border-1">

                    <label>Confirm Password: </label>
                    <input type="text" onChange={handleConfPassword} value={confPassword} />
                </div>
                {
                    confPasswordError ? <p className={styles.myerror}>{confPasswordError}</p> : ''
                }

            </form>
            <p className="text-center">Your form data</p>
            <div className="d-flex flex-column justify-content-start align-items-start">
                <p  >First name: {firstName}</p>
                <p>Last name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confPassword}</p>

            </div>

        </>
    );
}

export default UserForm;