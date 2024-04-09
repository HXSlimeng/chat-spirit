import { BotMessageSquare } from "lucide-react";
import { useRef, useEffect, useCallback } from "react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export default function FixedApp(props: { setOpen: (open: boolean) => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  let deboundIfDragFun: null | Generator = null;

  useEffect(() => {
    const unlisten = listenDrag();
    return unlisten;
  }, []);

  const listenDrag = useCallback(() => {
    if (!cardRef.current) return;
    let target = cardRef.current;

    target.addEventListener("mousedown", handleMousedown);
    document.documentElement.addEventListener("mouseup", handleMouseup);
    return () => target.removeEventListener("mousedown", handleMousedown);
  }, [cardRef]);

  function handleMousedown() {
    let target = cardRef.current;
    if (!target) return;

    deboundIfDragFun = (function* () {
      yield (target.style.top = target.offsetTop + target.clientHeight + "px");
    })();

    document.documentElement.addEventListener("mousemove", handleDragging);
  }
  function handleDragging(event: MouseEvent) {
    deboundIfDragFun?.next();
    let target = cardRef.current;
    if (!target) return;
    target.style.top = target.offsetTop + event.movementY + "px";
  }
  function handleMouseup() {
    document.documentElement.removeEventListener("mousemove", handleDragging);
  }

  return (
    <Card
      ref={cardRef}
      className="fixed bottom-2 right-0 flex h-[40px] w-[40px] cursor-pointer select-none columns-1 items-center rounded-full rounded-e-sm p-1 text-sm  
         shadow-lg transition-[width] 
        duration-200 hover:w-[150px]"
      onClick={() => props.setOpen(true)}
    >
      <div className="p-2  text-cyan-500">
        <BotMessageSquare />
      </div>
      <div className="text-nowrap">
        <Badge variant={"secondary"}>Ctrl</Badge>+
        <Badge variant={"secondary"}>Enter</Badge>
      </div>
    </Card>
  );
}
