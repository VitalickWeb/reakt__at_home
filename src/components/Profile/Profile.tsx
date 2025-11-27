import type { FC } from "react";

export type ProfileType = {
    image: string;
    alt: string;
};

export const Profile: FC<ProfileType> = ({ image, alt }) => {
    return <img src={image} alt={alt} />;
};
