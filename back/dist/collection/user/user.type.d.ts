import { User } from "./user.entity";
export declare class ProfileObj {
    googleId: string;
    email: string;
    name: string;
    familyName: string;
    givenName: string;
    imageUrl: string;
}
export declare class TokenObj {
    access_token: string;
    id_token: string;
    expires_in: number;
    first_issued_at: number;
    expires_at: number;
}
export declare class LoginObj {
    user: User;
}
