// Middleware for NextAuth.js to protect routes.

export { default } from "next-auth/middleware";

//Protected routes
export const config = { matcher: ["/dashboard"] };
