import { atom } from "recoil";

export const isLoginAtom = atom({
  key: "isLogin",
  default: true,
});
export const newlyAddedPostAtom = atom ({
  key : 'newlyAddedPost',
  default : {}
})

export const loggedInUserAtom  = atom ({
  key : 'loggedInUser' ,
  default : {}
})


export const userProfileInfos = atom({
  key: "userProfile",
  default: [],
});

export const forPassingid = atom({
  key: "Passid",
  default: {},
});

