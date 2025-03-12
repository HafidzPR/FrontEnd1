import React from "react";
import f22 from "../../assets/f22.jpg";
import pilot from "../../assets/pilot.jpg";
import Card from "../../components/card/card";

const Home: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-between px-10 py-10">
      <img
        src={f22}
        alt="Portrait"
        className="w-[800px] h-[800px] object-cover rounded-tl-[50px] rounded-tr-xl rounded-bl-lg rounded-br-[1000px] shadow-lg"
      />
      <section className="flex flex-col items-end text-right space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">MyCardProject</h1>
        <div className="bg-white shadow-xl rounded-lg p-6 w-[400px] border border-gray-200 transform transition duration-300 hover:scale-105">
          <Card
            imgSrc={pilot}
            title="Beyond the clouds where dreams take flight,
A dance with winds, a heart so light.
Unbound by chains, so vast, so high,
Embrace the stars, embrace the sky."
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
