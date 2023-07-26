import { useState } from "react";

export default function Controls(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & { isBottom: boolean }
) {
  const { children, isBottom, ...rest } = props;
  const [isControlsVisible, setIsControlsVisible] = useState<boolean>(false);

  function handleEnter(e: React.MouseEvent) {
    setIsControlsVisible(true);
  }

  function handleLeave(e: React.MouseEvent) {
    setIsControlsVisible(false);
  }

  return (
    <div
      {...rest}
      className="hover:border-blue-600 border-[2px] relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {children}
      {isControlsVisible && isBottom && (
        <h2 className="absolute bg-blue-600 px-2 pr-4 py-2 text-[white] z-10 translate-x-[-2px] translate-y-[-100%]">
          {"Contols will be displayed here"}
        </h2>
      )}
      {isControlsVisible && !isBottom && (
        <h2 className="absolute bg-blue-600 px-2 pr-4 py-2 text-[white] z-10 translate-x-[-2px]">
          {"Contols will be displayed here"}
        </h2>
      )}
    </div>
  );
}
