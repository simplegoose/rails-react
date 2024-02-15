import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGreetings } from '../redux/greetings/greetingsSlice';

const Index = () => {
  const dispatch = useDispatch();
  const greetings = useSelector((store) => store.greetings)

  useEffect(() => {
    dispatch(getGreetings());
  }, []);

  return (
    <>
      {
        greetings.isLoading ?
        <h1>Loading...</h1> :
        <h1>{greetings.greetings}</h1>
      }
    </>
  )
}

export default Index