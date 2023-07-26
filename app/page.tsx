"use client";

import Controls from "@/components/controls";
import HeroWithImage from "@/components/hero-with-image";
import Navbar from "@/components/navbar";
import SimpleHero from "@/components/simple-hero";
import { cn } from "@/lib/utils";
import { useState } from "react";

enum ComponentList {
  NAVBAR,
  LANDING,
  SIMPLE_LAYOUT,
}

type WidgetItemProp = Record<
  keyof typeof ComponentList,
  { name: String; component: React.ReactNode }
>;

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
    component: <SimpleHero />,
  },
};

function SideNavItem(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) {
  const { className, ...rest } = props;
  return (
    <div
      {...rest}
      draggable
      className={cn(
        "w-full text-[rgba(225,225,225,0.80)] hover:text-white px-4 py-2 border-b-[rgba(225,225,225,0.12)] border-b-[1px]",
        className
      )}
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
          <SideNavItem
            key={index}
            draggable
            onDragStart={(e) => {
              handleOnDrag(e, key);
            }}
          >
            {data[key as keyof typeof ComponentList].name}
          </SideNavItem>
        ))}
      </div>

      <div onDrop={handleOnDrop} onDragOver={handleOnDragOver}>
        {widgets.map((widget, index) => (
          <Controls key={index} isBottom={index === widgets.length - 1}>
            {data[widget as keyof typeof ComponentList].component}
          </Controls>
        ))}
      </div>
    </main>
  );
}
