// src/components/UserCard.jsx
import { Canvas } from "@react-three/fiber";
import Stars from "./Stars";

function UserCard({ user }) {
  const { name, email, phone } = user;

  return (
    <div className="relative w-52 h-48 border-2 border-purple-600 m-2 rounded-md flex justify-center items-center flex-col text-white overflow-hidden
      bg-[#000000]
    ">
      <Canvas className="w-full h-full">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} distance={1000} />
        <Stars />
      </Canvas>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="relative z-10 bg-black bg-opacity-50 p-2 rounded-md">
          <h2 className="text-white">{name}</h2>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
