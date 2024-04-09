import FixedBot from "./modules/FixedBot";
import ChatSheet from "./modules/ChatSheet";
import { useToggle } from "react-use";
function App() {
  const [open, setOpen] = useToggle(false);
  return (
    <div className="relative">
      <ChatSheet open={open} setOpen={setOpen}></ChatSheet>
      <FixedBot setOpen={setOpen}></FixedBot>
    </div>
  );
}

export default App;
