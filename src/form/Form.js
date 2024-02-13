import React, { useState } from 'react'
import './Form.css'

const Form = () =>{
    const[form, setform] = useState({
        name:"",
        email:"",
        password:""
    });
    const [array, setArray] = useState([]);
  const [nameError, setName] = useState("");
  const [passwordError, setPassword] = useState("");
  const [emailError, setEmail] = useState("");
  const save = (e) => {
    e.preventDefault();
    
    let Error = false; 
  if(form.name.length<3){
    setName("**Name required")
    Error = true;
  }
  else{
    setName("")
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(form.email)){
    setEmail("**Email required")
    Error = true;
  }
  else{
    setEmail("")
  }
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
  if(!passwordRegex.test(form.password)){
    setPassword("**Password required")
    Error = true;
  }
  else{
    setPassword("")
  }
  if (
    Error
     ) {
    return false;
  }
  setArray([...array, form]);
    setform({
      ...form,
      name: "",
      email: "",
      password: "",
    });
  };
const edit=((index)=>{
   console.log(index)
   if(index>=0){
    setform({
      name:array[index].name,
      email:array[index].email,
      password:array[index].password
    })
   }
});
const Delete=((index)=>{
  console.log(index)
  let value=[...array]
value.splice(index,1)
    setArray(value)
  
})



  return (
<div>
      <div className="form">
        <form onSubmit={save} className="formvalue">
          <div className="input-change">
            <lable>Name</lable>
            <input type="text" id="name"value={form.name}
              onChange={(e) => {setform({ ...form, name: e.target.value });
              setName("")}}/>
            <p id="name_error" className="text-danger">{nameError}</p>
          </div>
          <div className="input-change">
            <lable>Email</lable>
            <input type="email" id="email" value={form.email}
              onChange={(e) => {setform({ ...form, email: e.target.value });
              setEmail("")}} />
             <p id="email_error" className="text-danger">{emailError}</p>
          </div>
          <div className="input-change">
            <lable>Password</lable>
            <input type="password" id="password" value={form.password}
              onChange={(e) =>
               {setform({ ...form, password: e.target.value });
              setPassword("")}}/>
             <p id="password_error" className="text-danger">{passwordError}</p>
          </div>
          <div className="text-center mt-2">
            <button type="submit" className="bg-primary rounded">submit</button>
          </div>
        </form>
      </div>
      <div className="studenttable">
        <div className="tablevalue">
        <table className="table mt-4 container">
          <thead>
            <tr>
              <th scope="col">SI.NO</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {array.map((res, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{res.name}</td>
                <td>{res.email}</td>
                <td>{res.password}</td>
                <td><button type="submit" onClick={()=>edit(index)} className="bg-primary rounded">Edit</button>  <button type="submit" onClick={()=>Delete(index)} className="bg-danger rounded">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};
  


export default Form