import { http } from "../http-services";
import { IUser } from "../types/userType";

const getAllUsers = () => {
    return http.get<Array<IUser>>("/users/");
};
const getById = (user: IUser) => {
    return http.get<IUser>(`/users/${user.id}`);
};
const create = (user: IUser) => {
    return http.post<IUser>("/users/", JSON.stringify(user));
};
const remove = (user: IUser) => {
    console.log(JSON.stringify(user));
    return http.delete<any>(`/users/${user.id}`);
};
const update = (user: IUser) => {
    return http.put<any>(`/users/${user.id}`, user);
};

const UserService = {
    getAllUsers,
    getById,
    create,
    remove,
    update,
};

export default UserService;
