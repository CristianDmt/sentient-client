import CleanyApi from "../api/CleanyApi";
import {
    AUTHORIZATION_MECHANISM,
    HEADER_AUTHORIZATION,
    HEADER_X_API_KEY,
    HEADER_X_APP_ID,
    X_API_KEY,
    X_APP_ID
} from "../const";

export default class BookingsService {
    static getBookings = (ticket: string) => {
        return CleanyApi.get(
            `/bookings`, {
                headers: {
                    [HEADER_X_API_KEY]: X_API_KEY,
                    [HEADER_X_APP_ID]: X_APP_ID,
                    [HEADER_AUTHORIZATION]: `${AUTHORIZATION_MECHANISM} ${ticket}`
                }
            }
        );
    };
}