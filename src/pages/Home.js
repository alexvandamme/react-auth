import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function Home() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="container p-5">
      <h1 className="display-2 text-light text-center text-dark">
        {currentUser ? "Welcome" : "Connectez-vous"}
      </h1>
    </div>
  );
}
