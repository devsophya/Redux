interface User {
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

// Reducer: guarda o estado que desejamos compartilhar na aplica
//  manipula/altera o estado

interface UserAction {
  type: string;
  payload?: User;
}

// todo reducer precisa retornar o nosso estado atualizado
export function userReducer(
  state = initialState,
  action: UserAction
): UserState {
  if (action.type === "user/login") {
    return {
      ...state,
      user: action.payload as User,
    };
  } else if (action.type === "user/logout") {
    return {
      ...state,
      user: null,
    };
  }

  return state;
}
