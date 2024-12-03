
import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github",{redirectTo: "/home"})
      }}
    >
      <button type="submit" className='text-white bg-blue-700 rounded-md p-2'>Signin with GitHub</button>
    </form>
  )
} 