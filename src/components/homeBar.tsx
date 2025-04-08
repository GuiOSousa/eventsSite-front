import { FC } from "react";
import './homeBar.css'
import  Rolez  from '../assets/Rolez.svg'
import { NavBar } from "./navBar";

export const HomeBar: FC = () => {
	return (
		<div className="menuBar">
			<img src={Rolez} className="logo"/>
			<h2>Qual o plano de hoje?</h2>
			<NavBar/>
		</div>
	);
};
