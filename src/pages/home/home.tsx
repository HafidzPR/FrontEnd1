import React from "react";
import f22 from "../../assets/f22.jpg";
import pilot from "../../assets/pilot.jpg";
import Card from "../../components/card/card";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 sm:px-8 md:px-12 lg:px-16 py-8 space-y-8 lg:space-y-0">
      {/* Image Section */}
      <img
        src={f22}
        alt="Portrait"
        className="w-[90%] max-w-[400px] md:max-w-[600px] lg:max-w-[800px] h-auto object-cover rounded-tl-[50px] rounded-tr-xl rounded-bl-lg rounded-br-[1000px] shadow-lg"
      />

      {/* Text & Card Section */}
      <section className="flex flex-col items-center lg:items-end text-center md:text-left lg:text-right space-y-6 w-full lg:w-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          MyCardProject
        </h1>

        <div className="bg-white shadow-xl rounded-lg p-6 w-[90%] sm:w-[350px] md:w-[400px] border border-gray-200 transform transition duration-300 hover:scale-105">
          <Card
            imgSrc={pilot}
            title="Beyond the clouds where dreams take flight, A dance with winds, a heart so light. Unbound by chains, so vast, so high, Embrace the stars, embrace the sky."
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
