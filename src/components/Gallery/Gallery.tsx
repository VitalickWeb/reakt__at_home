import { Profile } from "../Profile/Profile";

// export type GalleryType = {};
export const Gallery = () => {
    const image = {
        id1: {
            src: "https://i.imgur.com/MK3eW3As.jpg",
            alt: "Katherine Johnson",
        },
    };

    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile image={image["id1"].src} alt={image["id1"].alt} />
            <Profile image={image["id1"].src} alt={image["id1"].alt} />
            <Profile image={image["id1"].src} alt={image["id1"].alt} />
        </section>
    );
};
