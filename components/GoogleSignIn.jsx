import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase.config"; // Import the initialized app
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

const GoogleSignIn = () => {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user); // Log the user object to the console
    } catch (error) {
      console.error(error);
      // Consider adding error handling logic here, e.g., displaying an error message
    }
  };
  return (
    <Button variant="outline" type="button" onClick={() => signInWithGoogle()}>
      <FcGoogle className="mr-2 h-4 w-4" /> Sign in with Google
    </Button>
  );
};

export default GoogleSignIn;
