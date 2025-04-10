import { FC } from "react";
import './eventInfo.css'
import { Event } from "../API/entities/Event";

export const EventInfo: FC<Event> = ({title, date}) => {
	return (
		<div className="eventInfo">
			<h1>{title}</h1>
            <p>{date}</p>
		</div>
	);
};