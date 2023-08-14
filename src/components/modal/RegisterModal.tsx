import React from "react";
import Heading from "../Heading";
import Modal from "./Modal";

const RegisterModal = () => {

  const body = (
    <div className="w-full flex flex-col gap-4">
        <Heading title="Welcome to Airbnb" />
    </div>
  )


  return(
    <Modal body={body} title="Register" actionLabel="Continue"  />
  )
}
export default RegisterModal;