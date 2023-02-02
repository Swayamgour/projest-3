import { atom } from "recoil";

export const isLoginAtom = atom({
  key: "isLogin",
  default: false,
});
export const newlyAddedPostAtom = atom ({
  key : 'newlyAddedPost',
  default : {}
})

export const loggedInUserAtom  = atom ({
  key : 'loggedInUser' ,
  default : {}
})


