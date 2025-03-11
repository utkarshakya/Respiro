import React from 'react'
import Heading from "./partial/Heading";
import CardSection from './partial/CardSection';

function Main() {
  return (
    <>
    <div className='w-full h-full flex flex-col gap-5'>
    <Heading />
    <CardSection/>
    </div>
    </>
  )
}

export default Main