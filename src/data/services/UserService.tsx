import CleanyApi from "../api/CleanyApi";
import {HEADER_X_API_KEY, X_API_KEY} from "../const";

interface UserAuthenticationResponse {
    id: string;
    username: string;
    email: string;
    image: string;
    name: string;
    phone: string;
    rating: string;
    roles: [string];
    termsAccepted: boolean;
}

export default class UserService {
    static authenticateUser = (username: string, password: string) => {
        return CleanyApi.post<UserAuthenticationResponse>(
            `/login`, {
                username: username,
                password: password
            }, {
                headers: {
                    [HEADER_X_API_KEY]: [X_API_KEY]
                }
            }
        );
    };
}