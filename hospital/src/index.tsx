import ReactDOM from "react-dom/client";
import App from "./App";
import { reset } from "styled-reset";
import { StyleSheetManager, createGlobalStyle } from "styled-components";
import { RecoilRoot } from "recoil";
import "./styles/fonts/pretendard-subset.css";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background-color: white;
    color: #444;
    font-family: "Pretendard",system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box; 
    height: 100%;
    line-height: 1.6;
    overflow-x: hidden; 
    position:relative;
  }
  b {
    font-weight: 700;
  }
  a {
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`;

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <>
        <RecoilRoot>
            <StyleSheetManager shouldForwardProp={() => true}>
                <GlobalStyle />
                <App />
            </StyleSheetManager>
        </RecoilRoot>
    </>
);
