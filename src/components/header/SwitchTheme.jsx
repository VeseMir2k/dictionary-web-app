const SwitchTheme = () => {
  return (
    <div className="flex">
      <div className="before:content relative h-[20px] w-[40px] cursor-pointer rounded-[50px] bg-[#757575] before:absolute before:left-[3px] before:top-[3px] before:h-[14px] before:w-[14px] before:rounded-[50%] before:bg-white "></div>
      <img className="ml-[12px] w-[20px]" src="./icon-moon.svg" alt="icon moon" />
    </div>
  );
};

export default SwitchTheme;
