const AppState = React.createContext();

const actions = keyMirror({
  AUTH: null,
});

const initState = { auth: false };

const reducer = (state, action) => {
  switch (action.type) {
    case actions.AUTH: {
      return { user: action.payload };
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
};

export const useAppState = () => {
  const [state] = React.useContext(AppState);
  return {
    state,
  };
};

export const AppStateProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initState);
  const value = React.useMemo(() => [state, dispatch], [state]);
  return <AppState.Provider value={value} {...props} />;
};
