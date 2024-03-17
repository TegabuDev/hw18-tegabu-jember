import { utilService } from "./utilService";
import { storageService } from "./storageService";
import axios from "axios";

function createUser(user) {
  const { username, email, password, avatar = "" } = user;
  const totalUsers = storageService.getUsers();

  const isExist = totalUsers.some((user) => user.username === username);
  if (isExist) return null;

  const newUser = {
    id: utilService.generateId(),
    username,
    password,
    email,
    avatar,
    isAdmin: false,
    createdAt: new Date(),
  };

  storageService.saveUsers([...totalUsers, newUser]);
  return true;
}

function login(username, password) {
  const users = storageService.getUsers();
  const foundedUser = users.find(
    (user) => user.password === password && user.username === username
  );

  if (!foundedUser) return null;
  storageService.saveLoggedInUser(foundedUser);
  return foundedUser;
}

function logout() {
  storageService.clearAll();
}

const allUsers = () => {
  return storageService.getUsers();
};

async function fetchAvatar() {
  try {
    const URL = `https://yesno.wtf/api`;
    //? GET with axios
    const { data } = await axios.get(URL);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const userService = {
  createUser,
  login,
  logout,
  fetchAvatar,
  allUsers,
};

//? POST with axios:
// const fetchDataWithAxios = await axios.put(
//   `${URL}?username=shoshi&isAdmin=true`,
//   { data: "I Am a body" }
// );
// const { data } = fetchDataWithAxios;

// try {
//   const URL = `https://yesno.wtf/api`;
//   //? GET with axios
//   const { data } = await axios.get(URL);
//   const newUser = {
//     id: utilService.generateId(),
//     username,
//     email,
//     password,
//     avatar: await data.image,
//     isAdmin: false,
//     createdAt: new Date(),
//   };
//   const allUsers = storageService.getUsers();
//   storageService.saveUsers([...allUsers, newUser]);
//   return data;
// } catch (error) {
//   console.log(error);
// }
