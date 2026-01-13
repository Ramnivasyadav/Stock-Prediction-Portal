import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
    <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
        <h1 className='text-light'>Stock Prediction Portal</h1>
        <p className='text-light lead'>AI stocks, prediction markets, and forecasting models are frequently featured in financial news, highlighting both optimism and caution around using predictive systems to guide trading decisions — including algorithm-driven forecasts for major AI players such as Nvidia, Meta, and A technology-powered platform that predicts stock behavior through advanced analytics.</p>
        <Button text="Explore Now" class="btn-outline-info" url="/dashboard" />
        </div>
    </div>
    </>
  )
}

export default Main
