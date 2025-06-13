import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export const UserImg = ({ width }) => {
  const { user } = useAuth0();
  return (
    <div
      style={{
        width: width,
        height: width,
        borderRadius: "50px",
        overflow: "hidden"
      }}
    >
      <img
        src={user && user.picture}
        alt="Profile"
        width={width}
      />
    </div>)
}