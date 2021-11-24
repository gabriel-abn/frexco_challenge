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

    const [user, setUser] = useState<IUser>(InitialUser);
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
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
        console.log(value + " Handler");
    };

    const saveUser = () => {
        var insertion = {
            login: user.login,
            password: user.password,
            birthDate: "today",
        };
        requests
            .create(insertion)
            .then((res) => {
                setUser({
                    login: res.data.login,
                    password: res.data.password,
                    birthDate: res.data.birthDate,
                });
                console.log(JSON.stringify(res.data));
            })
            .catch((err: Error) => {
                console.log(err.message);
            });
        console.log("Save data: " + JSON.stringify(insertion));
        console.log("Save user: " + JSON.stringify(user));
    };

    // const newUser = () => {
    //     setUser(InitialUser);
    // };

    return (
        <div>
            <MainDiv>
                <label>Username</label>
                <input
                    type="text"
                    name="login"
                    value={user.login}
                    onChange={handleInputChange}
                />
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInputChange}
                />
                <input type="button" value="submit" onClick={saveUser} />
            </MainDiv>
            <MainDiv direction="row">
                {users.map((user) => (
                    <h4 key={user.login}>{user.login}</h4>
                ))}
            </MainDiv>
        </div>
    );
};

export default MainInput;
