import { useEffect, useState } from "react";
import { EventInfo } from "../components/eventInfo";
import { NavBar } from "../components/navBar";
import './Events.css'
import { API } from "../API/api";
import { Event } from "../API/entities/Event";

const Events = () => {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
		const getEvents = async () => {
			try {
				const eventList = await API.getEvents()
				setEvents(eventList);
			} catch (erro) {
				console.error("Erro ao buscar eventos:", erro);
			}
		};

		getEvents();
	}, []);


    return (
    <div>
        <NavBar/>
        <h1>Página não implementada</h1>
        <div className="eventList">
				{events.map((event) => (
					<EventInfo
                        key={event.id}
						id={event.id}
						title={event.title}
						date={event.date}
					/>
				))}
			</div>
    </div>
    )
};

export default Events;