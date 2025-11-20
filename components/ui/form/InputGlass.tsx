const InputGlass = ({
  className,
  classNameLabel,
  type,
  placeholder,
  label,
  name,
  id,
}: {
  classNameLabel?: string;
  label?: string;
  className?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  type: "text" | "mail" | "password";
}) => {
  return (
    <>
      <label className={classNameLabel} htmlFor={name}>
        {label}
      </label>
      <input 
        className={` ${className} bg-white/10 border py-4 w-full text-white outline-none placeholder:text-white/60 px-5 text-sm font-light border-white/30 backdrop-blur-2xl rounded-full`}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
      />
    </>
  );
};

export default InputGlass;
