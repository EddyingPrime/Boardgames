import AppRouter from "./Router/AppRouter";
import { AuthProvider } from "./authentication/UseAuth";

export default function App() {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  );
}
