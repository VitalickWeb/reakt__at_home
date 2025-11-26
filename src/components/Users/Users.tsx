import type { FC } from "react";

export type UserType = {
    name: string;
    imageUrl: string;
    imageSize: number;
};
export type UsersType = {
    title: string;
    users: UserType;
    count: number;
};

export const Users: FC<UsersType> = ({ title, users, count }) => {
    return (
        <div className="">
            <h2 className="name">{title}</h2>
            <img
                src={users.imageUrl}
                alt={"Photo of " + users.name}
                style={{
                    width: users.imageSize,
                    height: users.imageSize,
                }}
            />
            <div>{`Photo of ${users.name}`}</div>
            <div>{count}</div>
        </div>
    );
};
