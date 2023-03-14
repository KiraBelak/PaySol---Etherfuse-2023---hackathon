import MainLayout from "@/components/layouts/MainLayout";

const owners = [
  {
    name: "Kaleb Rodriguez",
    description: " Programador 🧑‍💻, fotografo 📷, diseñador 🖍️, viajero ✈️, soñador 🤞. Me gusta aprender absolutamente de todo! Vamos por una comunidad mas grande! 💪",
    photoSrc: "/creadores/kaleb.jpg",
    link: "https://www.linkedin.com/in/kaleb-rodr%C3%ADguez/"
  },
  {
    name: "Lizbeth Rebolledo",
    description: "Me gusta bailar, leer y los gatitos. Acompáñanos a averiguar que tan  grande hacemos PaySol!🫢",
    photoSrc: "/creadores/liz.jpg",
    link:"https://www.facebook.com/Vsherpoetamaldita"
  },
 
];

export default function Owners() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 pb-8">
        <main className="flex flex-col items-center justify-center flex-1 px-6 sm:px-10 text-center text-white">
          <h1 className="text-4xl font-bold sm:text-6xl bg-black">
            Conoce a nuestro equipo
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {owners.map((owner) => (
              <a href={owner.link}>
              <div
                key={owner.name}
                className="bg-white text-black rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all duration-300"
              >
                
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    className="object-cover object-center w-full h-full"
                    src={owner.photoSrc}
                    alt={`Foto de ${owner.name}`}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{owner.name}</h2>
                  <p className="mt-2 text-md text-gray-300">{owner.materia}</p>
                  <p className="mt-2 text-md">{owner.description}</p>
                </div>
              </div>
              </a>
            ))}
          </div>
        </main>
      </div>
    </MainLayout>
  );
}
