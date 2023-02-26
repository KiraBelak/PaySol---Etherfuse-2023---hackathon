import MainLayout from "@/components/layouts/MainLayout";
import { useMirrorWorld } from "@/lib/useMirrorWorld";
import LoadingCircle from "@/components/common/LoadingCircle";
import { useEffect, useState } from "react";
import QRCode from 'qrcode.react';








export default function  Pagitos () {
   const { user} = useMirrorWorld();
   const [qrCodeImage, setQRCodeImage] = useState(null);

   
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleAmountChange = (event) => {
      setAmount(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const qrCodeContent = `{"sol": "${user.wallet.sol_address}","amount": ${amount}}`;
      console.log(name, amount);
      setQRCodeImage(qrCodeContent);
    };
    

    
//     if (user == null) {
//         return (
//             <MainLayout>
//           <div className="flex justify-center items-center h-full">
//             <LoadingCircle color="#000000" />
//           </div>
//           </MainLayout>
//         );
//       }else{
//         const [soles, setSoles] = useState(0);

//   useEffect(() => {
//     async function fetchData() {
//       const soles = await token();
//       setSoles(soles);
//     }
//     fetchData();
//   }, []);
        return(
        <MainLayout>
           
        <div className="flex justify-center flex-col  items-center h-full">
        {!qrCodeImage?(
        <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Cantidad:
        <input type="text" value={amount} onChange={handleAmountChange} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
        ):(
                  <QRCode value={qrCodeImage} size={256} />

        )}

{/* 
            <h1 className="text-5xl">Pagos</h1>

            <p className="text-3xl">Nombre: {user.username}</p>
            <p className="text-3xl">Solana sol:{soles} </p> */}
        </div>
        </MainLayout>
        )
      
      
    
}
   
// 