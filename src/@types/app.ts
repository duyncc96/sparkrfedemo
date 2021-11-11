import rootReducer from "../redux/rootReducer";

declare global {
  type AppState = ReturnType<typeof rootReducer>;
}
