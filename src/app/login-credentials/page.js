import { auth } from "@/auth";

export default async function Home() {
  const session = await auth()
 
  if (session) return (
    <div>
      <h1>Kamu telah login.</h1>
    </div>
  )
  return (
    <div>
    </div>
  )
}

// "use client"
// import { signIn } from "next-auth/react"
// import { useState } from "react"

// export default function Home() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const res = await signIn("credentials", {
//       email,
//       password,
//       redirect: true, // atau false untuk mengelola sendiri
//       callbackUrl: "/", // arahkan ke home setelah login
//     })
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="email" onChange={e => setEmail(e.target.value)} />
//       <input name="password" onChange={e => setPassword(e.target.value)} />
//       <button>Login</button>
//     </form>
//   )
// }
