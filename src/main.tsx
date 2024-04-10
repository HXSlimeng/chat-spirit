import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import "/app/globals.css";

let dom = document.createElement("div");
dom.id = "chat-spirit";
document.body.appendChild(dom);

ReactDOM.createRoot(dom!).render(
  <ThemeProvider defaultTheme="light">
    <App />
  </ThemeProvider>,
);
