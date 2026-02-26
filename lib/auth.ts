// import { cookies } from "next/headers";
// import { auth } from "@/app/firebase";

// export async function getUser() {
//   const cookieStore = cookies();
//   const session = await cookieStore.get("session")?.value;

//   if (!session) return null;

//   try {
//     const decoded = await Auth.verifySessionCookie(session);
//     return decoded; // contains uid, email, custom claims
//   } catch {
//     return null;
//   }
// }