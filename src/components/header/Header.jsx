import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {LogoutBtn, Container, Logo} from '../index'
import { Link } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  const authStatus = useSelector((state)=>state.auth.status)
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: !authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]
  return (
    <header className=' p-1 bg-slate-300'>
      <Container>
        <nav className='flex'>
          <div className='mr-4 '>
            <Link to='/'>
              <Logo />

              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name} className=' py-2'>
                <button
                onClick={() => navigate(item.slug)}
                className={`inline-block px-6 py-2 duration-200 border text-slate-700 border-slate-300 hover:border-cyan-600 font-clash`}>
                  {item.name}
                </button>

              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )

}

export default Header