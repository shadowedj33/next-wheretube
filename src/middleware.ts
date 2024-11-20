import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define a route matcher for protected routes
const isProtectedRoute = createRouteMatcher(["/settings(.*)"]);

export default clerkMiddleware((auth, req) => {
    // Check if the request is for a protected route
    if (isProtectedRoute(req)) {
        // Protect the route using Clerk's auth
        auth().protect();
    }
});

// Configuration for the middleware matcher
export const config = {
    matcher: [
        "/((?!.*\\..*|_next).*)", // Exclude files with extensions and Next.js internals
        "/",                      // Match the root path
        "/(api|trpc)(.*)",       // Match API routes
    ],
};