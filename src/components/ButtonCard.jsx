export const ButtonsCard = ({
  title,
  className,
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="shadow-[inset_0_0_0_2px_#616467] md:px-10 px-4  py-4 rounded-full tracking-widest uppercase font-semibold bg-transparent  hover:text-white dark:text-neutral-200 transition duration-200 hover:bg-black "
    >
      {children}
      <span className="hidden md:block">{title}</span>
    </button>
  );
};
