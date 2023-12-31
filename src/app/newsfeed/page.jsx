import React from "react";
import "./newsfeed.scss";
import Image from "next/image";

async function getData() {

  const res = await fetch("https://vlog-post-md-hadiuzzaman-rifat.vercel.app/api/posts", {
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

      <div className="newsFeed px-8">

        <div className="newsFeed_content flex flex-col gap-8">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-500 my-10">
            &gt; NewsFeed
          </h2>
          {data.map((item) => (
            <div
              key={item._id}
              className="newsFeed_content_item gap-4 flex flex-col md:flex-row md:items-center"
            >
              <div className="newsFeed_Image">
                <Image
                  src={item.image}
                  className="object-cover max-w-[300px] min-w-[200px] h-[300px]"
                  width={250}
                  height={400}
                  alt={item.title}
                ></Image>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="custom-h1">{item.title}</h1>
                <small className="text-red-500 font-bold">
                  Category : &quot; {item.category} &quot;
                </small>
                <p className="text-blue-400">Writer: {item.username}</p>
                <p>Description : &quot; { item.description} &quot;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default NewsFeed;

// import React from 'react';

// const page = () => {
//   return (
//     <div>
//       <h2>Hello</h2>
//     </div>
//   );
// };

// export default page;