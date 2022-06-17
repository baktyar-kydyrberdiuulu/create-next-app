import React from "react";
import A from "../components/A";
import Head from "next/head";


export const MainContainer = ({ children ,keywords}) => {
  return (
    <>
      <Head>
        <meta keywords={"Baktyiar, Nextjs" + keywords}></meta>
        <title>Test Next js</title>
      </Head>
      <div className="navbar">
        <A href={"/"} text="Home" />
        <A href={"/users"} text="Users" />
      </div>
      <div>{children}</div>

      <style jsx>
          {`
            .navbar {
              background: orange;
              padding: 15px;
            }
          `}
        </style>
    </>
  );
};
