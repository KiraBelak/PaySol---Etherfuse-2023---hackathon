import MainLayout from "@/components/layouts/MainLayout";
import Image from "next/image";

export async function getStaticProps(context) {
  const url = process.env.NEXTAUTH_URL ?? "http://localhost:3000/";
  return {
    props: {
      url,
    },// will be passed to the page component as props
  };
}

export default function iOS({ url = "http://localhost:3000/" }) {
  return (
    <MainLayout title="DemoPage" description="this is a demo page">
      <div className="content justify-center items-center w-full my-4 px-2">
        <h1 className="text-2xl md:text-3xl text-center text-blue font-bold pt-8 pb-4">
          Para instalar la app en iOS, sigue estos pasos:
        </h1>
        <div className="content space-y-2">
          <div className="paragraph">
            <p className="text-lg font-semibold text-center text-blue py-5 ">
              1. Abre el navegador Safari en tu dispositivo iOS.
            </p>
          </div>
          <div className="safari-logo flex justify-center items-center">
            <Image
              src="/images/ios/safari-logo.png"
              width={50}
              height={50}
              alt="safarilogo"
            />
          </div>
          <div className="paragraph">
            <p className="text-lg font-semibold text-center text-blue py-5 ">
              2. Ingresa a la siguiente dirección:
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold text-center text-green py-5 ">
              <a href={url}>{url}</a>
            </p>
          </div>
          <div className="paragraph">
            <p className="text-lg font-semibold text-center text-blue py-5 ">
              3. Presiona el botón &quot;Compartir&quot; en la parte inferior de
              la pantalla.
            </p>
          </div>
          <div className="safari-logo flex justify-center items-center">
            <Image
              src="/images/ios/share.png"
              width={200}
              height={80}
              alt="shareiosdynamo"
            />
          </div>
        </div>

        <div className="content justify-center items-center w-full my-4 px-2">
          <div className="paragraph">
            <p className="text-lg font-semibold text-center text-blue py-5 ">
              4. Selecciona la opción &quot; Agregar a la pantalla de inicio
              &quot;.
            </p>
          </div>
          <div className="safari-logo flex justify-center items-center">
            <Image
              src="/images/ios/inicio.png"
              width={250}
              height={280}
              alt="inicioiosdynamo"
            />
          </div>
        </div>

        <div className="content justify-center items-center w-full my-4 px-2">
          <div className="paragraph">
            <p className="text-lg font-semibold text-center text-blue py-5 ">
              5. Ingresa el nombre de la app y presiona el botón
              &quot;Agregar&quot;.
            </p>
          </div>
          <div className="safari-logo flex justify-center items-center">
            <Image
              src="/images/ios/add.png"
              width={250}
              height={50}
              alt="addios"
            />
          </div>
        </div>
        <div className="content justify-center items-center w-full my-4 px-2">
          <div className="paragraph">
            <p className="text-lg font-semibold text-center text-blue py-5 ">
              6. ¡Listo! Ya puedes abrir la app desde tu pantalla de inicio.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
