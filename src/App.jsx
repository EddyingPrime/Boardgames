import AppRouter from "./Router/AppRouter";
import { AuthProvider } from "./authentication/AuthProvider";

export default function App() {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  );
}
