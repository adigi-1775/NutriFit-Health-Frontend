import React, { useEffect } from 'react';

export default function HomePage(props){
  useEffect(()=>{
    props.setbgimage('images/smoothie.jpg')
    }, [])
    return(
      <div className="HomePage" class="text-center"><br />
      <br /><h1>Welcome to NutriFit-Health!</h1><br />
        <br /><h2>About</h2><br />
        <br /><p class="fs-5">Welcome to NutriFit-Health! We want to spread the importance of nutrition and fitness in relation to personal health. Create yourself a username and explore our reccomendations of exercises and nutrition. Feel free to add your own exercises and nutritious meals!</p>

        <p class="fs-5">This is a place where people can come together and share their personal nutrition and fitness knowledge with others so we can all stay healthy! Whether you are trying to start a new path to a healthy lifestyle or you are an exerpienced health food eating gym guruyou are welcome to join our community for a better healthier future!</p>
      </div>
)}
