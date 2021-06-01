export interface AuthenticationResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
  token: string;
  linkingCode: string;
  createdAt: Date;
}