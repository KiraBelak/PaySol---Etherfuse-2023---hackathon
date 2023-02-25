import MainLayout from "@/components/layouts/MainLayout";
// import { MirrorWorld, ClusterEnvironment } from "@mirrorworld/web3.js"
import User from "../components/User";
import { useState } from "react";
import nc from "next-connect";
import clientPromise from "@/lib/mongodb";
import { useMirrorWorld } from "../lib/useMirrorWorld";
// import ncoptions from "@/config/ncoptions";
// const handler = nc(ncoptions); //middleware next conect handler

export async function getServerSideProps(context) {
  try {
    // client.db() will be the default database passed in the MONGODB_URI
    // You can change the database by calling the client.db() function and specifying a database like:
    // const db = client.db("myDatabase");
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands
    await clientPromise;
    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}

// const mirrorworld = new MirrorWorld({
//   apiKey: "mw_Ch1dQ08pS32c7AosRdYSnLn534Jpb6SQEeD",
//   env: ClusterEnvironment.testnet, // Can be ClusterEnvionment.mainnet for mainnet
// });

export default function Home({ isConnected }) {
  // const { user, login } = useMirrorWorld()

  console.log("isConnected", isConnected);
  // const [user,setUser]= useState();
  // async function login() {
  //   const { user } = await mirrorworld.login();
  //     setUser(user)
  //   // handler.post(async (req, res) => {
  //   //   const db = req.db();
  //   //   const client = await clientPromise;
  //   //   const users = db.collection('usersx');
  //   //   const existingUser = await db.collection("users").findOne({ email: "correo@ejemplo.com" });
  //   //   if (existingUser) {
  //   //     console.log("User already exists in database");
  //   //   } else {
  //   //     const retarding = {
  //   //       username: user.username,
  //   //       wallet: user.wallet,
  //   //       createdAt: new Date(),
  //   //       updatedAt: new Date(),
  //   //     }
  //   //     const result = await users.insertOne(retarding);
  //   //     console.log(result);
  //   //   }
  //   // }); 
  //     console.log(user)
      
  //   }
  return (
    <MainLayout>
      <div className="content flex justify-center items-center w-full my-16">
        <div className="wrapper max-w-7xl">
        {/* <button onClick={login}>Login to Mirror World</button>
        {user ? (
          <div className="user-info">
              <ul>
                <User nombre={user.username} address={user.wallet.sol_address}/>
                <li>Wenas</li>
              </ul>
          </div>
        ) : (
          <p>No User available</p>
        )} */}
          {/* <h1 className="text-2xl text-center font-bold">
            Molusco 🦑 <br /> Demo Page{" "}
          </h1> */}
        </div>
      </div>
    </MainLayout>
  )
}
