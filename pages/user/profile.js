

import MainLayout from "@/components/layouts/MainLayout";
import { useMirrorWorld } from "@/lib/useMirrorWorld";
import LoadingCircle from "@/components/common/LoadingCircle";
import { useEffect, useState } from "react";
    

export default function  caracas () {
    const { user, mirrorworld,token} = useMirrorWorld();
    
    
    if (user == null) {
        return (
            <MainLayout>
          <div className="flex justify-center items-center h-full">
            <LoadingCircle color="#000000" />
          </div>
          </MainLayout>
        );
      }else{
        console.log(user)
        const [soles, setSoles] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const soles = await token();
      setSoles(soles);
    }
    fetchData();
  }, []);
        return(
        <MainLayout>
            
        <div className="flex justify-center flex-col  items-center h-full">

            <h1 className="text-5xl">Perfil</h1>

            <p className="text-3xl">Nombre: {user.username}</p>
            <p className="text-3xl">Solana sol:{soles} </p>
        </div>
        </MainLayout>
        )
      }
      

    
   
}