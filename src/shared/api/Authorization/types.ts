
export interface IUser {
    username: string;
    password: string;
}

export interface IToken {
    refresh: string;
    access: string;
}

export interface UserState {
    user: IUser;
    token: IToken;
    access_is_expired: boolean;
    auth: boolean;
}