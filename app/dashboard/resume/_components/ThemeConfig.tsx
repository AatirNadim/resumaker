"use client";
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@components/ui/popover";
import { Button } from "@/app/_components/ui/button";
import { LayoutGrid } from "lucide-react";
import { useResumeStore } from "@/app/context/ResumeContext";
import { colors } from "@/app/lib/constants";

// import { useRouter } from "next/router";

function ThemeConfig() {
  const { resumeObj, resumeId, setResumeObj } = useResumeStore();
  const [selectedColor, setSelectedColor] = useState<string>("");
  // const { resumeId } = useRouter().query as { resumeId: string };

  const onColorSelect = (color: string) => {
    setSelectedColor(color);
    setResumeObj({
      ...resumeObj,
      themeColor: color,
    });
    const data = {
      data: {
        themeColor: color,
      },
    };
    // GlobalApi.UpdateResumeDetail(resumeId, data).then((resp) => {
    //   console.log(resp);
    //   toast("Theme Color Updated");
    // });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="flex gap-2">
          {" "}
          <LayoutGrid /> Theme
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <h2 className="mb-2 text-sm font-bold">Select Theme Color</h2>
        <div className="grid grid-cols-5 gap-3">
          {colors.map((item, index) => (
            <div
              onClick={() => onColorSelect(item)}
              className={`h-5 w-5 rounded-full cursor-pointer
             hover:border-black border
             ${selectedColor == item && "border border-black"}
             `}
              style={{
                background: item,
              }}
              key={index}
            ></div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default ThemeConfig;
