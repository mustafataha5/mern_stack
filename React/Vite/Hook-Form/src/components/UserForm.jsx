import { useState } from "react";


const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
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
    }
    return (
        <>
            <form onSubmit={createUser}>

            
                <div className="d-flex justify-content-between bg-light py-3 px-4 my-3 text-black-50 rounded border border-1">
                    <label>First name: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </div>
                <div className="d-flex justify-content-between bg-light py-3 px-4 my-3 text-black-50 rounded border border-1">

                    <label>Last name: </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </div>
                <div className="d-flex justify-content-between bg-light py-3 px-4 my-3 text-black-50 rounded border border-1">

                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className="d-flex justify-content-between bg-light py-3 px-4 my-3 text-black-50 rounded border border-1">

                    <label>Password: </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <div className="d-flex justify-content-between bg-light py-3 px-4 my-3 text-black-50 rounded border border-1">

                    <label>Confirm Password: </label>
                    <input type="text" onChange={(e) => setConfPassword(e.target.value)} value={confPassword} />
                </div>

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