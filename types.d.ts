import { blog } from "./src/utils";

declare global {
    namespace Express {
        interface Request {
            blogData: blog[];
        }
    }
}