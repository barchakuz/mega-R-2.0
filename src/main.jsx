
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from '../store/store.js'


import Login from './components/pages/Login.jsx'
import {Protected as AuthLayout} from './components/AuthLayout.jsx'
import Signup from './components/pages/Signup.jsx'
import AllPost from './components/pages/AllPost.jsx'
import EditPost from './components/pages/EditPost.jsx'
import Post from './components/pages/Post.jsx'
import AddPost from './components/pages/AddPost.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element : <App />,
        children: [
            {
                path: '/login',
                element:(
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
                ) 
            },
            {
                path :'/signup',
                element:( 
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
                )
            },
            {
                path :'/all-posts',
                element : (
                    <AuthLayout authentication>
                        {" "}
                        <AllPost />
                    </AuthLayout>
                ),
                children : [
                    
                ]

            },
            {
                path: "/add-post",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <AddPost />
                    </AuthLayout>
                ),
            },
            {
                path: "/edit-post/:slug",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <EditPost />
                    </AuthLayout>
                ),
            },
            {
                path: "/all-posts/post/:slug",
                element: <Post />,
            },
        ]
    }
])
createRoot(document.getElementById('root')).render(


    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>

)
