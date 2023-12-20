import { useSetRecoilState } from "recoil";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/common/layout";
import NotFound from "./components/common/notfound";
import Home from "./screen/home";
import { Premium } from "./components/category/premium";
import { Teeth } from "./components/category/teeth";
import { Community } from "./components/category/community";
import { Counsel } from "./components/category/counsel";
import { displayResolution } from "./global/project_commin";
import { useEffect } from "react";
import { About } from "./components/category/about";
import { Helmet } from "react-helmet";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            errorElement: <NotFound />,
            children: [
                {
                    path: "",
                    element: <Home />,
                },
                {
                    path: "/about",
                    element: <About />,
                },
                {
                    path: "/premium",
                    element: <Premium />,
                },
                {
                    path: "/teeth",
                    element: <Teeth />,
                },
                {
                    path: "/community",
                    element: <Community />,
                },
                {
                    path: "/counsel",
                    element: <Counsel />,
                },
            ],
        },
    ],
    { basename: "/instead_of_me_hospital" }
);

function App() {
    const setDisplayResolution = useSetRecoilState(displayResolution);
    useEffect(() => {
        if (document.documentElement.clientWidth < 500) {
            setDisplayResolution("mobile");
        } else {
            setDisplayResolution("web");
        }
    }, [setDisplayResolution]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
