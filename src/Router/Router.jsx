import { createBrowserRouter } from "react-router-dom";
import Banner from "../Compo/Banner";
import Blog from "../Compo/Blog";
import Contact from "../Compo/Contact";
import DetailsProject from "../Compo/DetailsProject";
import Home from "../Compo/Home";
import Project from "../Compo/Project";
import { fakedata } from "../Fakedata/Data";
import Root from "../Rooot/Root";
import Error from "../Compo/Error";


export const Goro = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: '/',
                element: <Contact></Contact>
            },
            {
                path: '/',
                element: <Project></Project>
            },
            {
                path: 'details/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/alldata/${params.id}`),
                element: < DetailsProject ></DetailsProject >
            },
            {

            }
        ]
    }
])