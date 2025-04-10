import AxiosAPI from "./axios";
import { Event } from "./entities/Event";

export class API {
	static async getEvents(): Promise<Event[]> {
		const response = await AxiosAPI.get<Event[]>("/events");
        console.log(response.data)
		return response.data;
	}
}