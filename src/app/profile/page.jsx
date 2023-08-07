"use client";
import React from "react";
import "./profile.scss";
import Form from "@/components/Form/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Activities from "@/components/Activities/Activities";
import Loading from "@/components/loading/Loading";
import {useState, useEffect} from "react"

const Profile = () => {
  const session = useSession();
  const router = useRouter();

  // for loading 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(counter, 1000)
  }, []);

  const counter=()=>{
    setLoading((data)=>!data)
  }


  {
    session.status === "loading" && <h1 className="custom-h1">Loading ...</h1>;
  }
  {
    session.status === "unauthenticated" && router?.push("/signin");
  }
  return (
    session.status === "authenticated" && (
      <div>
        {
          loading && <Loading></Loading>
        }
        {
          !loading && (<div className="profile">
          <h2>PROFILE</h2>
          <div className="profile_container flex flex-col lg:flex-row gap-16 bg-[#1f1f1f] w-full">
            <div>
              <Form></Form>
            </div>
            <div>
              <Activities className={scroll} max-h-screen></Activities>
            </div>
          </div>
        </div>)
        }
      </div>
    )
  );
};

export default Profile;
