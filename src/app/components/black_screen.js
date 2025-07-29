export function BlackScreen({ clicked }) {
  const handleClick = () => {
    clicked?.();
  };
  return (
    <div
      className=" fixed inset-0 bg-black/50 z-50 flex items-center justify-center animate-fade"
      onClick={handleClick}
    ></div>
  );
}
