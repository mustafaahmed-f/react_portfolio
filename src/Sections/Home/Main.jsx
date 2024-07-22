// import React from "react";

function Home() {
  return (
    <section
      id="home"
      className="h-screen w-full bg-cover bg-no-repeat text-white p-0"
      style={{
        backgroundImage: "url(../luca-bravo-XJXWbfSo2f0-unsplash.jpg)",
      }}
    >
      <header className="h-full w-full bg-black bg-opacity-70 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center opacity-1  animate-mainText-animation">
          <h4 className="sm:text-3xl text-2xl my-2">Welcome</h4>
          <h1 className="text-center text-6xl sm:text-9xl font-light my-2">
            I'm <span className="text-mainColor font-medium">Mustafa</span>{" "}
            Ahmed
          </h1>
          <h2 className="text-mainColor bg-[#363d56] px-6 py-2 rounded-full my-4">
            Mern stack developer
          </h2>
        </div>
      </header>
    </section>
  );
}

export default Home;
