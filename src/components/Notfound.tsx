import { NavLink } from "react-router-dom";

const setActive = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "border-[#ee1f80]/50 border rounded text-[#ee1f80]/90 text-lg select-none flex items-center "
    : "hover:text-[#ee1f80] border-[#ee1f80]/50 hover:border-[#ee1f80] rounded border select-none text-lg transition-colors flex items-center py-1 px-3";

function Notfound() {
  return (
    <div
      className={
        "flex flex-col items-center justify-center font-yesteryear sm:text-9xl py-8 text-[#ee1f80] text-7xl gap-8"
      }
    >
      Notfound
      <div className="flex gap-4 text-white/50">
        <NavLink className={setActive} to={"/"} title={"Home"}>
          Home
        </NavLink>
        <NavLink className={setActive} to={"/portfolio"} title={"Portfolio"}>
          Portfolio
        </NavLink>
        <NavLink className={setActive} to={"/contact"} title={"Contact"}>
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Notfound;
