import React, { useState, useEffect, ChangeEvent } from "react";
import { MainDiv } from "./styles";
import { IUser } from "../../types/userType";
import requests from "../../services/requests";

import { Table, Button } from "react-bootstrap";
import EditUser from "../EditUser/editUser";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

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

    const deleteUser = (userRemove: IUser) => {
        console.log(JSON.stringify(userRemove));
        requests
            .remove(userRemove)
            .then((res) => {
                console.log(JSON.stringify(res.data));
            })
            .catch((err: Error) => {
                console.log(err.message);
            });
    };

    const saveUser = () => {
        var insertion = {
            id: user.id,
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

    const renderList = () => {
        return users.map((userInfo) => {
            return (
                <tr key={userInfo.id}>
                    <td key={userInfo.id}>{userInfo.id}</td>
                    <td key={userInfo.login}>{userInfo.login}</td>
                    <td key={userInfo.password}>{userInfo.password}</td>
                    <td key={userInfo.birthDate}>{userInfo.birthDate}</td>
                    <td>
                        <Popup
                            trigger={
                                <Button
                                    variant="warning"
                                    size="sm"
                                    onClick={() => {}}
                                >
                                    Edit
                                </Button>
                            }
                        >
                            <EditUser user={userInfo} />
                        </Popup>

                        <Button
                            value={userInfo.id}
                            variant="danger"
                            size="sm"
                            onClick={() => {
                                deleteUser(userInfo);
                            }}
                        >
                            Delete
                        </Button>
                    </td>
                </tr>
            );
        });
    };

    return (
        <div>
            <MainDiv direction="row">
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
                <Table striped hover className="text-center">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Login</th>
                            <th>Password</th>
                            <th>Birth Date</th>
                        </tr>
                    </thead>
                    <tbody>{renderList()}</tbody>
                </Table>
            </MainDiv>
        </div>
    );
};

export default MainInput;
