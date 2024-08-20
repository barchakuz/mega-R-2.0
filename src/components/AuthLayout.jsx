import { useState, useEffect } from 'react'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export function Protected({childern , authentication = true }) {
    const [loader, setLoader] = useState( true);
    const navigate = useNavigate()
    const authStatus = useSelector((state)=> state = state.auth.status);

    useEffect(()=>{
        if (authentication && authStatus !== authentication) {
                navigate('/login')
        } else if(!authentication && authStatus !== authentication){
            navigate('/')
        }
        setLoader(false)
    }, [navigate, authStatus, authStatus])


  return loader? <h1>Loading</h1> : <>{childern}</>
}
