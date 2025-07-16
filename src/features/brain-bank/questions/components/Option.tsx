interface OptionsProps {
  label: string;
  active?: boolean;
  onClick: () => void;
}

const Option: React.FC<OptionsProps> = ({ label, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer ${active ? "bg-active text-white" : "bg-background"} font-hind-siliguri grid h-11 w-11 place-content-center rounded-full font-semibold`}
    >
      {label}
    </div>
  );
};

export default Option;
