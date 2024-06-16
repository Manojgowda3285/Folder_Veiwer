
import { Css, FolderOpen, Image, InsertDriveFileOutlined, } from "@mui/icons-material";
import IconReact from "./components/icon-react/index"
import IconTypescript from "./components/icon-typescript/index";
import js_icon from "./assets/js_icon.svg"
import IconNpm from "./components/icon-npm";
import IconHtml from "./components/icon-html";



export const FolderData = [
    {
        id: 1,
        name: "Files",
        sub: [
            {
                id: 1.1,
                name: "public",
                logo: <FolderOpen   color="primary" />,
                child: [
                    {
                        id: 1.01,
                        name: "vite.svg",
                        logo: <Image sx={{ color: "#8bc34a" }} />,
                    },
                ],
            },
            {
                id: 1.2,
                name: "src",
                logo: <FolderOpen   color="primary" />,
                child: [
                    {
                        id: 1.02,
                        name: "assets",
                        logo: <FolderOpen color="primary" />,
                        sub_child: [
                            {
                                id: 1.002,
                                name: "react.svg",
                                logo: <Image sx={{ color: "#8bc34a" }} />,
                            },
                        ],
                    },
                    {
                        id: 1.02,
                        name: "test",
                        logo: <FolderOpen   color="primary" />,
                        sub_child: [
                            {
                                id: 1.002,
                                name: "App.css",
                                logo: <Css color="primary" />,
                            },
                            {
                                id: 1.012,
                                name: "App.tsx",
                                logo: <IconReact color="#387ADF" />,
                            },
                            {
                                id: 1.022,
                                name: "index.css",
                                logo: <Css color="primary" />,
                            },
                            {
                                id: 1.032,
                                name: "main.tsx",
                                logo: <IconReact color="#387ADF" />,
                            },
                            {
                                id: 1.042,
                                name: "vite-env.d.ts",
                                logo: <IconTypescript   color="#387ADF"/>,
                            },
                        ],
                    },
                ],
            },
            {
                id: 1.3,
                name: ".eslintrc.cjs",
                logo: <div style={{maxWidth:"20px"}}> <img width="100%" src={js_icon}/></div>,
            },
            {
                id: 1.4,
                name: "__gitignore",
                logo: <InsertDriveFileOutlined sx={{ color: "grey" }} />,
            },
            {
                id:1.5,
                name:"index.html",
                logo:<IconHtml color="yellow"/>
            },
            {
                id:1.6,
                name:"package-lock.json",
                logo:<IconNpm color="red"/>
            }
        ],
    },
];