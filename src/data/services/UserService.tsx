import SentientApi from "../api/SentientApi";
import { AuthenticationResponse } from "../entities/AuthenticationResponse";

export default class UserService {
  static authenticateUser = (email: string, password: string) => {
    return SentientApi.post<AuthenticationResponse>(
      `/auth/login`, {
        email: email,
        password: password
      }
    );
  };
}