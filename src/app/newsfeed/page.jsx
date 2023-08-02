import React from 'react';
import "./newsfeed.scss"
async function getData() {
    const res = await fetch("http://localhost:3000/api/posts", {
      cache: "no-store",
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json()
  }

const NewsFeed = async() => {
    const data= await getData()
    return (
        <div className='newsFeed'>
            
        </div>
    );
};

export default NewsFeed;