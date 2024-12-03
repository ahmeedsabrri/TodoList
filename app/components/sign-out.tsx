import { signOut } from "@/auth"
 
export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut({redirectTo:"/"})
      }}
    >
      <button type="submit" className='text-white bg-blue-700 rounded-md p-2'>Sign Out</button>
    </form>
  )
}