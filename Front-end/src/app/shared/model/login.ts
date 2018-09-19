import { User } from './user';

export interface LoginModel {
    access_token: string;
    expires_at: string;
    user: User;
}
