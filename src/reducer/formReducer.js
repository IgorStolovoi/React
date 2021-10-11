export const ON_INPUT_TEXT = "onInput";
export const STEP = "step";
export const LOAD_AVATAR = "choosedAvatar";

export const initialState = {
  step: 3,
  data: {
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    street: "",
    house: "",
    img: {
      chosenImg: "",
      listImg: [
        "https://i.pinimg.com/474x/06/7e/e8/067ee8bb1534b811f9da66ed8d9b344a.jpg",
        "https://www.meme-arsenal.com/memes/204840924677cd84de1e07aa4b941fd8.jpg",
        "https://i.pinimg.com/736x/4f/ce/59/4fce590817e6a77bfb981f406cac9aac.jpg",
        "https://otvet.imgsmail.ru/download/234958158_86f92fda3758dbf7e3c6e43997dab138_800.jpg",
        "https://i.pinimg.com/474x/d0/c0/3e/d0c03e4c02cfb65e41894fe1ff78faf1.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxMGqjUYcC5G8QoznwrghR-m3cLYMajWAMfw&usqp=CAU",
      ],
    },
    password: "",
    retypedPassword: "",
  },
};
export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_INPUT_TEXT:
      return {
        ...state,
        data: { ...state.data, ...action.info },
      };
    case STEP:
      return {
        ...state,
        step: action.step,
      };
    case LOAD_AVATAR:
      return {
        ...state,
        data: {
          ...state.data,
          img: { ...state.data.img, chosenImg: action.src },
        },
      };
    default:
      return state;
  }
};

export const onInputText = (action, payload) => ({
  type: action,
  info: payload,
});
export const onStep = (action, payload) => ({
  type: action,
  step: payload,
});
export const uploadAvatar = (action, payload) => ({
  type: action,
  src: payload,
});
