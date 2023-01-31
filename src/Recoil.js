import { atom } from "recoil";

export const isLoginAtom = atom({
  key: "isLogin",
  default: true,
});
export const newlyAddedPostAtom = atom ({
  key : 'newlyAddedPost',
  default : null
})

export const loggedInUserAtom  = atom ({
  key : 'loggedInUser' ,
  default : null 
})


