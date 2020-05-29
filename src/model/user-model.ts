export type Login = {
    phone?: string,
    password?: string,
    [key:string]:any
};

export type Sign = {
    phone?: string,
    password?: string,
    passwordRepeat?: string,
    username?: string,
    [key:string]:any 
}