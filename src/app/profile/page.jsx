"use client";
import React from "react";
import "./profile.scss";
import Form from "@/components/Form/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Profile = () => {
  const session = useSession();
  const router = useRouter();
  {
    session.status === "loading" && <h1 className="custom-h1">Loading ...</h1>;
  }
  {
    session.status === "unauthenticated" && router?.push("/signin");
  }
  return (
    session.status === "authenticated" && (
      <div className="profile">
        <h2>PROFILE</h2>
        <div className="profile_container">
          <Form></Form>
        </div>
      </div>
    )
  );
};

export default Profile;
