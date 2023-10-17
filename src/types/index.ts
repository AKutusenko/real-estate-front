export interface IUser {
    id?: number;
    email?: string;
    token: string;
    statusCode?: string | undefined,
    message?: string | undefined,
}

export interface ISignUpUserData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
export interface ISignInUserData {
    email: string;
    password: string;
}

export interface IResponseUserData {
    statusCode: string | undefined,
    message: string | undefined,
    token: string,
}

export interface ICard {
    id: number,
    name: string,
    imageUrl: string,
    generalPrice: string,
    oneTicketPrice: string,
    rate: string,
    timeLeft: string,
    sold: string,
    createdAt: string,
    updatedAt: string,
}

export interface IpasswordRecoeryData {
    email: string;
}