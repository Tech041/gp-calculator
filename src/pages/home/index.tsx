import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="h-screen w-full flex justify-center items-center bg-yellow-200">
      
      <div className="">
        <h1 className="text-center text-xl font-bold text-purple-500 py-2">
          APP COLLECTIONS
        </h1>
        <p className="text-gray-800 text-xl">
          Welcome to the NelFiz app collections
        </p>
        <div className="">
          <p className="text-center my-10 capitalize text-xl text-purple-700">
            Choose an app
          </p>
          <div className="flex flex-col gap-1 justify-center items-center">
            <Link
              className="py-2 bg-green-600 font-semibold  px-4 text-white rounded-xl"
              to={"/calculator"}
            >
              CGPA CALCULATOR
            </Link>
            <Link
              className="py-2 mt-5 px-4 font-semibold text-white bg-blue-700 rounded-xl py-"
              to={"/guess-game"}
            >
              GUESS GAME
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
