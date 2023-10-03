import { Request, Response } from "express";
import { blog, analyzeBlogData, queryResolver } from "./utils";
import _ from "lodash"

export const blogStatsController = async (req: Request, res: Response) => {
    try {
        const blogData: blog[] | undefined = req.blogData
        if (!blogData) {
            res.status(500).json({ error: "internal server error (issue with blogData middleware)" })
        }

        const memoizedAnalysis = _.memoize(analyzeBlogData)

        const stats = await memoizedAnalysis(blogData);
        res.status(200).json({ stats })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const blogSearchController = async (req: Request, res: Response) => {
    const { query } = req.query
    if (!query || typeof query !== "string") {
        res.status(400).json({
            error: "no query passed with the url"
        })
    }
    const blogData: blog[] | undefined = req.blogData
    if (!blogData) {
        res.status(500).json({ error: "internal server error (issue with blogData middleware)" })
    }
    const memoizedQueryResolver = _.memoize(queryResolver)

    const queryResult = await memoizedQueryResolver(query, blogData)

    res.status(200).json({
        queryResult: queryResult
    })

}
