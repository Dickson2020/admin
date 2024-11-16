"use client"
import { FiEye, FiEyeOff } from 'react-icons/fi'
import './login.css'
import { useEffect, useState } from 'react'
import BASEURL from '../url'
import { BiLoaderCircle } from 'react-icons/bi'

interface propsType {
    success: (id: number) => void
}
export default function LoginForm( props : propsType ) {
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        setIsError(false)
    },[email, password])

    const loginAccount = () =>{
        const data = {
            email: email.trim(),
            password: password.trim()
        }

 setIsError(false)
 setIsLoading(true)
 setErrorMessage('')
        fetch(BASEURL + '/admin/login',{
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        }).then((res)=> res.json()).then((result)=>{
            setIsError(false)
            setIsLoading(false)

            if(result.status){
                //alert('login successful: '+result.data.id)
                props.success(result.data.id)
            }else{
                setIsError(true)
                setErrorMessage(result.message)
            }

        }).catch((err)=>{
            setIsError(true)
            setIsLoading(false)
            setErrorMessage(err.message)

        })
    }

    
  const getLoginSession = ()=>{
    const session =  localStorage.getItem('session')
    if(session !== null){
     
     setIsLoading(true)
    }
   }

   useEffect(()=>{
    getLoginSession()
   },[])

    return (
        <div className="login-container">

            <div className='form-view'>
                <h2 className='title'>Yasser Admin</h2>
                <p className='text'>Log in to your administration dashboard</p>

                          {isError && <p className='error-message'>{errorMessage}</p>}                

                <input type='email' onChange={(event) => setEmail(event.target.value)} className='form-input' placeholder='Enter business email'/>

                <div className='input-group form-input2'>
                <input onChange={(event) => setPassword(event.target.value)} type={passwordVisible ? 'password' : 'text'} className='form-input-x' placeholder='Enter password'/>
                <button onClick={()=> setPasswordVisible(!passwordVisible)} className='btn-transparent'>
                    
                    {
                    passwordVisible?
                    <FiEye color='#000' size={20}/>
                    :
                    <FiEyeOff color='#000' size={20}/>
                    }
                </button>
                </div>

                <button className='login-btn' onClick={()=> loginAccount()}>
                    {
                        isLoading ?  <BiLoaderCircle className='animated-loader' size={20} color='#fff'/> : 'Login'
                    }
                </button>
                
            </div>


           

        </div>

    )
}