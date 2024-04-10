import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CornerDownLeft } from "lucide-react";
import { useMemo, useState } from "react";
import { Textarea } from "@/components/ui/textarea";

export type InputerProps = {
  disabled: boolean;
};

const Inputer: React.FC<InputerProps> = function ({ disabled }, ref) {
  const [value, setValue] = useState("");

  const inpWrapperClassNames = clsx(
    "flex w-full items-center  gap-x-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-within:outline-none focus-within:ring-1 focus-within:ring-ring",
    {
      "cursor-not-allowed opacity-50": disabled,
    },
  );
  const inputClassNames = clsx(
    "break-all  focus-visible:outline-none",
    "before:absolute before:block before:text-slate-400 before:content-[attr(data-placeholder)] before:cursor-text",
    {
      "before:hidden": value,
    },
  );

  return (
    <div className={inpWrapperClassNames}>
      {/* <ScrollArea className="max-h-[100px] flex-grow ">
        <div
          contentEditable={!disabled}
          suppressContentEditableWarning={true}
          className={inputClassNames}
          data-placeholder="说点什么吧!"
          onInput={(e) => setValue(e.currentTarget.innerText)}
        ></div>
      </ScrollArea> */}
      <Textarea
        value={value}
        placeholder="说点什么吧"
        onInput={(e) => setValue(e.currentTarget.value)}
        className="m-0 h-[38px] min-h-[38px] resize-none border-none p-0 shadow-none focus-visible:ring-0"
        rows={8}
      ></Textarea>
      <Button size={"sm"}>
        <CornerDownLeft size={14}></CornerDownLeft>
      </Button>
    </div>
  );
};
export default Inputer;
