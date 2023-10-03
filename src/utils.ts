import _ from "lodash"

export interface blog {
    id: string;
    image_url: string;
    title: string;
}


export async function analyzeBlogData(blogData: blog[]) {
    if (!Array.isArray(blogData) || blogData.length === 0) {
        throw new Error("Invalid or empty array")
    }

    const totalblogs = blogData.length
    const longestBlog = _.maxBy(blogData, (blog) => blog.title.length)
    const privacyBlogs = _.filter(blogData, (blog) => blog.title.toLowerCase().includes("privacy")).length
    const uniqueBlogs = _.uniqBy(blogData, (blog) => blog.title)

    return {
        "Total number of blogs": totalblogs,
        "The title of the longest blog": longestBlog ? longestBlog.title : null,
        "Number of blogs with 'privacy' in the title": privacyBlogs,
        "An array of unique blog titles": uniqueBlogs ? uniqueBlogs.map((blog) => blog.title) : null
    }
}

export async function queryResolver(query: any, blogData: blog[]) {
    const queryResult = _.filter(blogData, (blog) => blog.title.includes(query!.toString()))
    return queryResult
}