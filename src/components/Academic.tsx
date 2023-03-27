import Skills from "./Skills";

export default function Academic() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-3xl font-bold">Skills | Academics</h2>
      </div>
      <div className="grid place-items-center h-full text-white">
        <div className="grid gap-10 items-center justify-center md:grid-cols-2">
          <div className="justify-self-center">
            <Skills />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Sahil Jadhav 👋</h2>
          </div>
        </div>
      </div>
    </>
  );
}
