import { create } from "zustand";

const adminBlog = create((state) => ({
    page : {
        active : 0
    }
}))

export default adminBlog;