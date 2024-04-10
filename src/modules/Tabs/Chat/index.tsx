import Inputer from "./Inputer";
import Interlocution from "./Interlocution";
export default function Chat() {
  return (
    <div className="flex h-full flex-col gap-y-2">
      <div className="flex-grow">
        <Interlocution />
      </div>
      <div className="w-full">
        <Inputer disabled={false} />
      </div>
    </div>
  );
}
