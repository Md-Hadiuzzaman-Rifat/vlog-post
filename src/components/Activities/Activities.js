import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import useSWR from "swr";

const Activities = () => {
  const session = useSession();
  const router = useRouter();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  const handleDelete= async(id)=>{
    try{
      await fetch(`/api/posts/${id}`,{
        method: "DELETE"
      })
    }catch(err){
      console.log(err);
    }
    mutate()
  }

  if (session.status === "authenticated") {
    return (
      <div className="text-blue-500">
        <h1 className="large-h1 underline py-4">YOUR ACTIVITIES</h1>
        <div>
          {isLoading
            ? "loading"
            : data?.map((item) => (
                <div key={item._id} className="h-[110px] flex flex-col gap-2">
                  <div className="min-w-[250px] justify-between p-2 flex flex-row gap-2">
                    <div>
                      <Image
                        className="w-[100px] h-[100px] object-cover"
                        src={item.image}
                        width={200}
                        height={200}
                        alt="image"
                      ></Image>
                    </div>
                    <div>
                      <h1>{item.title}</h1>
                    </div>
                    <span className="cursor-pointer text-red-500 font-bold" onClick={()=>handleDelete(item._id)}>x</span>
                  </div>
                </div>
              ))}
        </div>
      </div>
    );
  }
};

export default Activities;
