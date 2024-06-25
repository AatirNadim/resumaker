import React, { useContext, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@components/Generics/Popover";
import { Button } from "@/app/_components/Generics/Button";
import { LayoutGrid } from "lucide-react";
// import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import GlobalApi from "@lib/apiCalls";
// import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { useResumeContext } from "@/app/context/ResumeContext";
// import { useRouter } from "next/router";

function ThemeConfig() {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A1",
    "#A133FF",
    "#33FFA1",
    "#FF7133",
    "#71FF33",
    "#7133FF",
    "#FF3371",
    "#33FF71",
    "#3371FF",
    "#A1FF33",
    "#33A1FF",
    "#FF5733",
    "#5733FF",
    "#33FF5A",
    "#5A33FF",
    "#FF335A",
    "#335AFF",
  ];

  // const { resumeObj, setResumeObj } = useContext(ResumeInfoContext);
  const { resumeObj, resumeId, setResumeObj } = useResumeContext();
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
