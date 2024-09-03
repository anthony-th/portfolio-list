import Welcome from "../components/Welcome";

function Homepage() {
  return (
    <div className={"bg-zinc-800 text-white min-w-[300px] min-h-screen flex flex-col justify-center items-center gap-4"}>
      <Welcome />
    </div>
  );
}

export default Homepage;
