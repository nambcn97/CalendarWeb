import { BaseModel } from './base-model';

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
}
export interface UserModel extends BaseModel {
    data: User[];
}
