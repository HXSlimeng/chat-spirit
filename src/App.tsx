import { useCallback, useEffect, useRef } from "react";
import "./App.css";
import { Card } from "./components/ui/card";
import { BotMessageSquare } from "lucide-react";
import { Badge } from "./components/ui/badge";
function App() {
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    handleDrag();
  }, []);

  const handleDrag = useCallback(
    function () {
      if (!cardRef.current) return;
      let target = cardRef.current;

      function handleDragging(event: MouseEvent) {
        cardRef.current!.style.top = event.y + "px";
      }

      target.addEventListener("mousedown", () => {
        document.documentElement.addEventListener("mousemove", handleDragging);
      });

      document.documentElement.addEventListener("mouseup", () => {
        document.documentElement.style.cursor = "auto";
        document.documentElement.removeEventListener(
          "mousemove",
          handleDragging,
        );
      });
    },
    [cardRef],
  );
  return (
    <>
      <Card
        ref={cardRef}
        className="fixed bottom-2 right-0 flex  h-[50px] w-[40px] cursor-pointer select-none columns-1 items-center rounded-full rounded-e-sm p-1 text-sm  transition-[width]  duration-200 hover:w-[170px] hover:shadow-lg"
      >
        <div className="p-2  text-slate-500">
          <BotMessageSquare />
        </div>
        <div className="text-nowrap">
          <Badge variant={"secondary"}>Ctrl</Badge>+{" "}
          <Badge variant={"secondary"}>Enter</Badge>
        </div>
      </Card>
    </>
  );
}

export default App;
