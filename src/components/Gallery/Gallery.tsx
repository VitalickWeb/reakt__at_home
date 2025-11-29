import type { FC } from "react";
import { Profile } from "../Profile/Profile";

type ImgType = {
    src: string;
    alt: string;
};
export type GalleryType = {
    galery: ImgType;
};
export const Gallery: FC<GalleryType> = ({ galery }) => {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile image={galery.src} alt={galery.alt} />
            <Profile image={galery.src} alt={galery.alt} />
            <Profile image={galery.src} alt={galery.alt} />
        </section>
    );
};
