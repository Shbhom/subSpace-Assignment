import express from "express"
const blogRouter = express.Router()
import { blogStatsController, blogSearchController } from "./controller"
import { blogDataMiddleware } from "./middleware"

blogRouter.get('/api/blog-stats', blogDataMiddleware, blogStatsController)
blogRouter.get("/api/blog-search", blogDataMiddleware, blogSearchController)

export default blogRouter