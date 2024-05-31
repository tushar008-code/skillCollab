import notifier from "./assets/Group.png";

function OptionsBox() {
  return (
    <div className="options flex-1 mobile:hidden">
      <ul className="flex items-center justify-end ">
        <li className="mx-5 h-10 flex items-center justify-center w-10 rounded-full bg-white ">
          <img className="h-5 w-5" src={notifier} alt="" />
        </li>
        <li className="mx-5">
          <img
            className="h-10 w-10 rounded-full border-black border-solid border-1px "
            src=""
            alt=""
          />
        </li>
      </ul>
    </div>
  );
}

export default OptionsBox;
