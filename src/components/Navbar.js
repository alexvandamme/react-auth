import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";

export default function Navbar() {
  const { toggleModals, currentUser } = useContext(UserContext);

  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch {
      alert("Impossible de vous déconnecter");
    }
  };

  return (
    <nav className="navbar navbar-light bg-light px-4 border-bottom border-2">
      <Link to="/" className="navbar-brand">
        React Auth
      </Link>
      <div>
        {!currentUser ? (
          <button
            onClick={() => toggleModals("signUp")}
            className="btn btn-primary"
          >
            S'inscrire
          </button>
        ) : (
          ""
        )}
        {!currentUser ? (
          <button
            onClick={() => toggleModals("signIn")}
            className="btn btn-primary ms-2"
          >
            Se connecter
          </button>
        ) : (
          ""
        )}
        {currentUser ? (
          <button onClick={logOut} className="btn btn-danger ms-2">
            Se deconnecter
          </button>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}
