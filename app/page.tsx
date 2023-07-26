"use client";

import HeroWithImage from "@/components/hero-with-image";
import Navbar from "@/components/navbar";
import SimpleHero from "@/components/simple-hero";
import { useState } from "react";

enum ComponentList {
  NAVBAR,
  LANDING,
  SIMPLE_LAYOUT
}

type WidgetProp = {
  name: String;
  component: React.ReactNode;
};
type WidgetItemProp = Record<keyof typeof ComponentList, WidgetProp>

const data: WidgetItemProp = {
  NAVBAR: {
    name: "Navbar",
    component: <Navbar />,
  },
  LANDING: {
    name: "Hero With Image",
    component: <HeroWithImage />,
  },
  SIMPLE_LAYOUT: {
    name: "Empty Layout",
    component: <SimpleHero />
  }
};


export function Controls(props: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {isBottom: boolean},
) {
  const {children, isBottom, ...rest } = props;
  const [isControlsVisible, setIsControlsVisible] = useState<boolean>(false);

  function handleEnter(e: React.MouseEvent) {
    setIsControlsVisible(true)
  }

  function handleLeave(e: React.MouseEvent) {
    setIsControlsVisible(false)
  }

  return (
    <div {...rest} className="hover:border-blue-600 border-[2px] relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {children}
      {isControlsVisible && isBottom && <h2 className="absolute bg-blue-600 px-2 pr-4 py-2 text-[white] z-10 translate-x-[-2px] translate-y-[-100%]">{"Contols will be displayed here"}</h2>}
      {isControlsVisible && !isBottom && <h2 className="absolute bg-blue-600 px-2 pr-4 py-2 text-[white] z-10 translate-x-[-2px]">{"Contols will be displayed here"}</h2>}
    </div>
  )
}

export function ComponentNavItem(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >,
) {
  const { ...rest } = props;
  return (
    <div
      {...rest}
      draggable
      className="w-full text-[rgba(225,225,225,0.80)] hover:text-white px-4 py-2 border-b-[rgba(225,225,225,0.12)] border-b-[1px]"
    ></div>
  );
}

export default function Home() {
  const [widgets, setWidgets] = useState<string[]>([]);

  function handleOnDrag(e: React.DragEvent, widgetType: string) {
    e.dataTransfer.setData("widgetType", widgetType);
  }

  function handleOnDrop(e: React.DragEvent) {
    const widgetType = e.dataTransfer.getData("widgetType") as string;
    console.log("widgetType", widgetType);
    setWidgets([...widgets, widgetType]);
  }

  function handleOnDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  return (
    <main className="grid grid-cols-[300px_1fr] min-h-screen min-w-screen">
      <div className="flex flex-col gap items-center justify-start bg-gray-900">
        {...Object.keys(data).map((key, index) => (
          <ComponentNavItem
            key={index}
            draggable
            onDragStart={(e) => {
              handleOnDrag(e, key);
            }}
          >
            {data[key as keyof typeof ComponentList].name}
          </ComponentNavItem>
        ))}
      </div>

      <div onDrop={handleOnDrop} onDragOver={handleOnDragOver}>
        {widgets.map((widget, index) => (
          <Controls key={index} isBottom={index === widgets.length-1}>{data[widget as keyof typeof ComponentList].component}</Controls>
        ))}
      </div>
    </main>
  );
}
