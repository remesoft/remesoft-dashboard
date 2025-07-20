import * as motion from "motion/react-client";

interface OptionsProps {
  label: string;
  active?: boolean;
  onClick: () => void;
}

const Option: React.FC<OptionsProps> = ({ label, active, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 0.05, // fast but smooth
      }}
      className={`cursor-pointer ${active ? "bg-active text-white" : "bg-background"} font-hind-siliguri grid h-11 w-11 place-content-center rounded-full font-semibold transition`}
    >
      {label}
    </motion.div>
  );
};

export default Option;
