type ButtonProps = {
  label: string;
  classname?: string;
};

const Button = ({ label, classname = "" }: ButtonProps) => {
  return (
    <div>
      <button
        className={`mt-[26px] rounded-md bg-primary px-8 py-3 text-xs font-bold text-white ${classname}`}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
