import axios from "axios";
import { NextFunction, Request, Response } from "express";

export async function blogDataMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const response = await axios.get('https://intent-kit-16.hasura.app/api/rest/blogs', {
            headers: {
                'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6',
            },
        });

        if (response.status !== 200) {
            res.status(response.status).json({
                error: `API responded with status code ${response.status}`,
            });
            return;
        }

        req.blogData = response.data.blogs;
        return next();
    } catch (error) {
        console.error(`Error in blogDataMiddleware: ${error}`);
        res.status(500).json({
            error: "Internal Server Error",
        });
    }
}