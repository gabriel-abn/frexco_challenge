import { http } from "../http-services";
import { IUser } from "../types/userType";

const getAllUsers = () => {
    return http.get<Array<IUser>>("/users/");
};
const getById = (id: string) => {
    return http.get<IUser>(`/users/${id}/`);
};
const create = (user: IUser) => {
    return http.post<IUser>("/users/", user);
};

const UserService = {
    getAllUsers,
    getById,
    create,
};

export default UserService;
