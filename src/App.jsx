import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout"
import Login from "./views/Login"
import Home from "./views/Home"
import CreateGame from "./views/CreateGame"
import GameDatabase from "./views/GameDatabase"
import UpdateGame from "./views/UpdateGame"
import "./App.css"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/app",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "create",
                element: <CreateGame />
            },
            {
                path: "games",
                element: <GameDatabase />
            },
            {
                path: "update/:id",
                element: <UpdateGame />
            }
        ]
    }
])

export default function App(){
    return <RouterProvider router={router} />
}
