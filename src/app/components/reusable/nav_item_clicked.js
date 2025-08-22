"use client";

import { useClicked } from "@/lib/clicked_context";
import Colors from "@/lib/colors";

export default function NavItemClicked({
  label,
  icon,
  width = "w-8",
  clicked,
  activeColor = Colors.group_active.blue,
  clickedColor = Colors.active.blue,
  clickedText = Colors.group_active.blue,
  hoverBg = Colors.hover.gray,
  colorText = Colors.text.gray,
}) {
  const {play} = useClicked();
  const handleClick = () => {
    play();
    clicked?.();
  };
  activeColor = activeColor || Colors.text.default;
  return (
    <div
      onClick={handleClick}
      className={`group flex flex-col justify-center gap-2 items-center ${hoverBg} rounded-full px-4 py-2 transition duration-300 ease-in-out cursor-pointer ${clickedColor}`}
    >
      <div
        className={`${colorText} ${width} ${activeColor} ${clickedText}`}
      >
        {icon}
      </div>
      <p className={`text-sm ${colorText} ${activeColor} ${clickedText}`}>
        {label}
      </p>
    </div>
  );
}
