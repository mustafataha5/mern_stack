import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Main from './views/Main'
import { Route, Routes, useNavigate } from 'react-router-dom'
import AuthorForm from './components/AuthorForm'
import AuthorList from './components/AuthorList'
import UpdateA from './views/UpdateA' ; 
import axios from 'axios'

function App() {
  
  const [authorList, setAuthorList] = useState([]);
  const [name,setName] = useState() ; 
  const [ errors, setErrors] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:8000/api/authors")
        .then(res => { setAuthorList(res.data.authors)  })
        .catch(err => { console.log(err) });
}, [])
  
  
  
  useEffect(()=>{
    navigate('/author');
  },[])


  const addAuthor = (newAuthor) =>{
    axios.post("http://localhost:8000/api/authors",newAuthor)
    .then(res => { 
       setAuthorList([...authorList,res.data]) ;
      console.log(res)})
    .catch(err => {
      //console.log("-----"+Object.keys(err.response))
      const errorResponse = err.response.data.errors; 
      const errorArr = []; // Define a temp error array to push the messages in
      for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    // errorArr.push(errorResponse[key].message)
        errorArr.push(errorResponse[key].message) ;
      }
      setErrors(errorArr) ; 
      //console.log("-----"+Object.keys(err.response.data.errors.name))
    } ); 
   
  }

  const updateAuthor = (newAuthor) =>{
    axios.patch("http://localhost:8000/api/authors",newAuthor)
    .then(res => console.log(res))
    .catch(err => {
      //console.log("-----"+Object.keys(err.response))
      const errorResponse = err.response.data.errors; 
      const errorArr = []; // Define a temp error array to push the messages in
      for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    // errorArr.push(errorResponse[key].message)
        errorArr.push(errorResponse[key].message) ;
      }
      setErrors(errorArr) ; 
      //console.log("-----"+Object.keys(err.response.data.errors.name))
    } ); 
   
  }

 

  return (
    <>
      <Routes>
        <Route path='/author' element={<Main linkto='/author/new' linktext={'Add new Author'} text='We have quests by:' > <AuthorList authorList={authorList} setAuthorList={setAuthorList}/> </Main>} ></Route>
        <Route path='/author/new' element={<Main linkto={'/author'} linktext={'Home'} text='Add a new author:' > <AuthorForm errors={errors} initalName={''} text='Add' submitHandle={addAuthor}/> </Main>} ></Route>
        <Route path='/author/:id' element={<Main linkto={'/author'} linktext={'Home'} text='Update author:' > <UpdateA authorList={authorList} setAuthorList={setAuthorList}/>  </Main>} ></Route>
      </Routes>
    </>
  )
}

export default App
