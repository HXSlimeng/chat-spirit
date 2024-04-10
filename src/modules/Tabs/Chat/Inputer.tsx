import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SendIcon } from "lucide-react";
import { useState } from "react";
export default function Inputer() {
  const [value, setValue] = useState("");
  return (
    <div className="flex  items-end gap-x-2">
      <Textarea
        placeholder="说点什么吧"
        value={value}
        className="resize-none"
        rows={0}
      ></Textarea>
      <Button size={"icon"}>
        <SendIcon size={14}></SendIcon>
      </Button>
    </div>
  );
}
