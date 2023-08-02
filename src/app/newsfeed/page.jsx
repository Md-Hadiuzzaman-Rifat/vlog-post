import React from "react";
import "./newsfeed.scss";
import Image from "next/image";
async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const NewsFeed = async () => {
  const data = await getData();
  return (
    <div className="newsFeed">
      <div className="newsFeed_content">
        {
            data.map((item)=><div key={Math.random}className="newsFeed_content_item">
            <div className="newsFeed_Image">
                <Image src={item.image} width={300} height={400} alt={item.title} ></Image>
            </div>
            <div>
                <h1>{item.title}</h1>
                <small>{item.category}</small>
                <p>{item.description}</p>
            </div>
        </div>)
        }
      </div>
    </div>
  );
};

export default NewsFeed;
