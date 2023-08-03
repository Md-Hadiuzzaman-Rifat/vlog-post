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
      <div className="newsFeed_content flex flex-col gap-4">
        {
            data.map((item)=><div key={Math.random}className="newsFeed_content_item gap-4 flex flex-col md:flex-row items-center">
            <div className="newsFeed_Image">
                <Image src={item.image} className="max-w-[300px] min-w-[200px]" width={300} height={400} alt={item.title} ></Image>
            </div>
            <div>
                <h1 className="custom-h1">{item.title}</h1>
                <small className="text-red-500 font-bold">{item.category}</small>
                <p>{item.description}</p>
            </div>
        </div>)
        }
      </div>
    </div>
  );
};

export default NewsFeed;
