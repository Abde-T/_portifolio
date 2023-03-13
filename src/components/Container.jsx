import React from "react";
import Kinetic from "./Kinetic";


const Container = () => {
  return (
    <div className="container__wrapper">
      <div className="row">
        <div className="left">
          <h1 className="title">Hey</h1>
          <h1 className="title blue">I'm Abde</h1>
          <p className="header__para">
            Lorem ipsum dolor sit,
            <b className="blue"> amet consectetur adipisicing </b> elit. Amet
            sapiente cum, maiores ipsam voluptatem nam enim repellat ad in Quam
            quasi odit adipisci veritatis, <b className="blue click"> cum. </b>
          </p>
        </div>
        <div className="right">
          <Kinetic/>
        </div>
      </div>
    </div>
  );
};

export default Container;
