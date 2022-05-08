import React from 'react';
import './Blog.css';
const Blogs = () => {
    return (
        <div>
            <h1 className='text-center border-top p-3 mt-5 rounded d-inline-block bg-light shadow border-danger border-4'>Some interesting blogs</h1>
            <div className='blog-container'>


                <div className='blog-question-container'>
                    <div className="blog-question">
                        <h4 className='text-success'>What are the difference between javascript and nodejs</h4>
                        <hr />
                        <p>JavaScript is a simple programming language that could be run in any browser that supports the JavaScript Engine. On the other hand, Node.js is a running environment or interpreter for the JavaScript programming language.</p>
                        <p>JavaScript can run on any engine, including Firefox's Spider Monkey, Safari's JavaScript Core, and V8 (Google Chrome). As a result, JavaScript programming is very simple to create, and any running environment is equivalent to a proper browser. On the other hand, Node.js only supports the V8 engine, which is exclusive to Google Chrome.</p>
                    </div>
                    <div className="blog-question">
                        <h4 className='text-success'>What are the differences between sql and nosql databases?</h4>
                        <hr />
                        <p>In SQL table with fixed rows and columns, on the other hand document type JSON documents, key-value, table with rows and dynamic columns in nosql.
                        </p>
                        <p>SQL supported Multi-Record ACID Transactions but most nosql do not support multi-record ACID transactions. However, some—like MongoDB—do.</p>
                    </div>
                    <div className="blog-question">
                        <h4 className='text-success'>What is the purpose of jwt and how does it work?</h4>
                        <hr />
                        <p>
                            A JWT is a mechanism to verify the owner of some JSON data. It's an encoded, URL-safe string that can contain an unlimited amount of data and is cryptographically signed.  </p>
                        <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blogs;