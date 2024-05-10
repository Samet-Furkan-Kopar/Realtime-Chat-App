export const profilePhoto = [
	"/images/avatar.jpg",
    "/images/avatar1.jpg",
    "/images/avatar2.png",
    "/images/avatar3.png",
];

export const getRandomPhoto = () => {
	return profilePhoto[Math.floor(Math.random() * profilePhoto.length)];
};
