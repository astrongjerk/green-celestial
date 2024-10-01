import React from 'react'
import "./createblog.css"

const CreateBlog = () => {
  return (
    <>
    <div className="createBlog">
        <div className="createBlogInner">
            <h2>CREATE A BLOG</h2>
            <small>This Web Is Developed & Designed By Dark_Knight</small>

            <form>
                <label htmlFor="blogTitle">
                    Title
                </label>
                <input type="text" id='blogTitle' placeholder='ENTER BLOG TITLE HERE...'/>

                <label htmlFor="blogImg">
                    Featured Image
                </label>
                <input type="file" id='blogImg' />

                <label htmlFor="blogContent">
                    Content
                </label>
                <textarea type="text" id='blogContent' placeholder='ENTER BLOG CONTENTS HERE...'/>

                <label htmlFor="blogCat">
                    Category
                </label>
                <select>
                    <option value="">Opt 1</option>
                </select>

                <label htmlFor="blogMetaDesc">
                    Meta Description <span>(Descriptin For Search Engines /Web Crawlers)</span>
                </label>
                <input type="text" id='blogMetaDesc' placeholder='ENTER META DESC HERE...'/>

                <label htmlFor="blogMetaKeywords">
                    Meta Keywords <span>(Descriptin For Search Engines /Web Crawlers)</span>
                </label>
                <input type="text" id='blogMetaKeywords' placeholder='ENTER META KEYWORDS HERE...'/>

                <button type='submit'>
                    CREATE
                </button>
            </form>

        </div>
    </div>
    </>    
  )
}

export default CreateBlog