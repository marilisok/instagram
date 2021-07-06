import {RouteProps} from "react-router";

export interface UserData {
	username: string;
	password: string;
}
export interface User {
	id: string;
	name: string;
	surname: string;
	username: string;
	description: string;
	email: string;
	password: string;
}
export interface PrivateRouteProps extends RouteProps{
	component: any;
}
