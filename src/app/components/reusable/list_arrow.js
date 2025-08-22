import { useClicked } from "@/lib/clicked_context";
import Colors from "@/lib/colors";

export default function ListArrow({
  label,
  icon,
  clicked,
  width = "w-8",
  activeColor = Colors.text.blueDark,
  hoverBg = Colors.hover.blue,
  activeBg = Colors.hover.blueDark,
  textColor = Colors.text.blue,
  colorBg = Colors.background.default,
  borderColor = Colors.border.gray,
  activeBorderColor = Colors.hover.borderBlue,
  clickedBg = Colors.active.blueDark,
  clickedBorder = Colors.active.borderBlue,
}) {
  const { play } = useClicked();
  const handleClick = () => {
    play();
    clicked?.();
  };
  return (
    <div
      onClick={handleClick}
      className={`flex flex-row items-center w-full justify-between rounded-2xl ${hoverBg} transition-all cursor-pointer p-2 ${activeBg} ${colorBg} border-b-2 ${borderColor} ${activeBorderColor} hover:border-b-2 ${clickedBg} ${clickedBorder}`}
    >
      <p className={`${textColor}`}>{label}</p>
      <div className={`${width} ${activeColor}`}>{icon}</div>
    </div>
  );
}
