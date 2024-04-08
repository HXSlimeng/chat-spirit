import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "/app/globals.css";
import { ThemeProvider } from "./components/theme-provider.tsx";

let dom = document.createElement("div");
dom.id = "chat-spirit";
dom.classList.add("light");
document.body.appendChild(dom);

ReactDOM.createRoot(dom!).render(
  <ThemeProvider defaultTheme="light">
    <App />
  </ThemeProvider>,
);
