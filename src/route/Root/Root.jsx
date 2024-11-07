import { Outlet, NavLink } from "react-router-dom";
import s from "./Root.module.css"

export const Root = () => {
  return (
    <>
      <nav className={s.div}>
        <NavLink className={({ isActive, isPending }) => isActive ? s.active : isPending ? s.loading : s.btn} to={'ToDo'}>
          ToDo
        </NavLink>
        <NavLink className={({ isActive, isPending }) => isActive ? s.active : isPending ? s.loading : s.btn} to={'Notes'}>
          Notes
        </NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  )
};
