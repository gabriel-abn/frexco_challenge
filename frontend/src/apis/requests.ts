import { http } from "../http-services";
import { IUser } from "../types/userType";

class UserService {
    getAllUsers() {
        return http.get<Array<IUser>>("/");
    }
    getById(id: string) {
        return http.get<IUser>(`/${id}/`);
    }
    create(user: IUser) {
        return http.post<IUser>("/", user);
    }
}

export default new UserService();
