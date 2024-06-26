import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BotMessageSquare } from "lucide-react";
import { useState } from "react";
import Chat from "./Tabs/Chat";
export type SheetProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function ChatSheet(props: SheetProps) {
  const tabinfoList = [
    { key: "chat", name: "聊天", comp: <Chat></Chat> },
    { key: "history", name: "历史" },
    { key: "profile", name: "设置" },
  ];
  const [currTab, setCurrTab] = useState("chat");

  return (
    <Sheet open={props.open} modal={false} onOpenChange={props.setOpen}>
      <SheetContent className="flex h-full flex-col space-y-2">
        <SheetHeader>
          <SheetTitle className="flex space-x-2">
            <BotMessageSquare className="text-cyan-500" />
            <span>Chat Spirit</span>
          </SheetTitle>
        </SheetHeader>
        <Tabs
          className="flex h-full flex-grow flex-col"
          value={currTab}
          onValueChange={setCurrTab}
        >
          <TabsList className="grid w-full grid-cols-3">
            {tabinfoList.map(({ key, name }) => (
              <TabsTrigger key={key} value={key}>
                {name}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabinfoList.map(({ key, comp }) => (
            <TabsContent key={key} value={key} className="h-full flex-grow">
              {comp ?? "test"}
            </TabsContent>
          ))}
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
