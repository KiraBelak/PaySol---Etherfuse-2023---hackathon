

import MainLayout from "@/components/layouts/MainLayout";
import { useMirrorWorld } from "@/lib/useMirrorWorld";
import LoadingCircle from "@/components/common/LoadingCircle";
import { useEffect, useState } from "react";
    

export default function Caracas() {
    const { user, token,fetchUser } = useMirrorWorld();
    const [soles, setSoles] = useState(0);
  
    useEffect(() => {
      if (user == null) return;
  
      async function fetchData() {
        const soles = await token();
        setSoles(soles);
        const user = await fetchUser();
        console.log(user);
      }
      fetchData();
    }, [user, token, fetchUser]);
  
    if (user == null) {
      return (
        <MainLayout>
          <div className="flex justify-center items-center h-full">
            <LoadingCircle color="#000000" />
          </div>
        </MainLayout>
      );
    }
  
    return (
      <MainLayout>
        <div className="flex justify-center flex-col items-center h-full">
          <h1 className="text-5xl">Perfil</h1>
          <p className="text-3xl">Nombre: {user.username}</p>
          <p className="text-3xl">Solana sol:{soles} </p>
        </div>
      </MainLayout>
    );
  }
  