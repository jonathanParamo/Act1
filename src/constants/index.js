import { FaTwitter, FaLinkedin } from 'react-icons/fa';

export const navLinks = [
  {
    id: "Hocs",
    title: "Hocs",
  },
  {
    id: "CardUsers",
    title: "Users",
  },
];

// export const navIcons = [
//   {
//     id: "Twitter",
//     title: <FaTwitter />,
//   },
//   {
//     id: "Linkedin",
//     title: <FaLinkedin />,
//   },
// ]

export const dataObtener = async () => {
  const usersUrl = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(usersUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return [];
  }
};