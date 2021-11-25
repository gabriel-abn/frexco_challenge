import React, { useState, ChangeEvent } from "react";
import { Button } from "react-bootstrap";
import { IUser } from "../../types/userType";

import { Container } from "./styles";

interface IProps {
    user: IUser;
}

const EditUser: React.FC<IProps> = ({ user }) => {
    const [editUser, setEditUser] = useState<IUser>(user);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setEditUser({ ...editUser, [name]: value });
        console.log(value + " Button");
    };

    return (
        <>
            <input
                type="text"
                placeholder={user.login}
                onChange={handleInputChange}
            />
            <input
                type="text"
                placeholder={user.password}
                onChange={handleInputChange}
            />
            <input
                type="text"
                placeholder={user.birthDate}
                onChange={handleInputChange}
            />
            <div>
                <Button variant="success">Confirm</Button>
                <Button variant="danger">Cancel</Button>
            </div>
        </>
    );
};

export default EditUser;
