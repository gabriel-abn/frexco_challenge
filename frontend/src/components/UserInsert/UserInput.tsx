import React, { useState, useEffect, ChangeEvent } from "react";
import { MainDiv } from "./styles";
import { IUser } from "../../types/userType";
import requests from "../../apis/requests";

const MainInput: React.FC = () => {
    const InitialUser = {
        login: "",
        password: "",
        birthDate: "",
    };

    const [user, setUser] = useState<IUser>({
        login: "",
        password: "",
        birthDate: "",
    });
    const [users, setUsers] = useState<Array<IUser>>([]);

    useEffect(() => {
        requests
            .getAllUsers()
            .then((res) => {
                setUsers(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        return () => {};
    }, []);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target;
    };

    const insertUser = () => {};

    return (
        <div>
            <MainDiv>
                <label>Username</label>
                <input type="text" name="login" value={user.login} />
                <label>Password</label>
                <input type="password" name="password" value={user.password} />
                <input
                    type="button"
                    value="submit"
                    onClick={(e) => {
                        // setUser();
                    }}
                />
            </MainDiv>
            <MainDiv>
                {users.map((user) => (
                    <h4>{user.login}</h4>
                ))}
            </MainDiv>
        </div>
    );
};

export default MainInput;
