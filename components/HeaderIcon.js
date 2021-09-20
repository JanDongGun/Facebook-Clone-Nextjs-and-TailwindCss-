function HeaderIcon({ Icon, active }) {
  return (
    <div className="group cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 flex items-center rounded-xl active:border-b-2 active:border-blue-500 ">
      <Icon
        className={`text-gray-500 h-5 sm:h-7 mx-auto group-hover:text-blue-500 ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
}

export default HeaderIcon;
