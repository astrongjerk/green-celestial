import React, { memo } from "react";
import "./blogmngmnt.css";
import { Link, Navigate, NavLink } from "react-router-dom";

const BlogMngmnt = () => {
  const blogSections = [
    ["View Statistics", "/admin/blog/stats.jpg","dashboard/blog/create"],
    ["View Blogs", "/admin/blog/view.jpg","dashboard/blog/create"],
    ["Create A Blog", "/admin/blog/create.jpg","/dashboard/blog/create"],
    ["Delete A Blog", "/admin/blog/delete.jpg","dashboard/blog/create"],
  ];

  return (
    <>
      <div className="blog_mngt">
        <div className="blog_mngt_inner">
          {blogSections.map((val, index) => {
            return (
                <div className="blog_mngt_card" key={index}>
                  <Link to ={val[2]}>
                  <img src={val[1]} alt={val[0]} loading="lazy" width="100%" height="280px"/>
                  <h3>{val[0]}</h3>
                  </Link>
                </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const MemoBlogMngmnt = memo(BlogMngmnt);
export default MemoBlogMngmnt;
