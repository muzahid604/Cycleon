import React from 'react';
import { Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <div>
                <h1>Difference between javascript and nodejs</h1>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Javascript</th>
                            <th>Node js</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Javascript is a programming language that is used for writing scripts on the website.</td>
                            <td>NodeJS is a Javascript runtime environment.</td>

                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Javascript can only be run in the browsers.</td>
                            <td>We can run Javascript outside the browser with the help of NodeJS.</td>

                        </tr>
                        <tr>
                            <td>3</td>
                            <td>It is basically used on the client-side.</td>
                            <td>It is mostly used on the server-side.</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div>
                <h1>When should you use nodejs and when should you use mongodb?</h1>
                <h4>When should we use Nodejs?</h4>
                <p>Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...

                    So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.</p>
                <br />
                <h4>When should we use MongoDB?</h4>
                <p>
                    If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases. Different databases have different strengths (things they are best at) and different ways of using them so it's a whole different question to choose the right/best database for what you're doing
                </p>
            </div>
            <div>
                <h1>Differences between sql and nosql databases?</h1>
            </div>
        </div>
    );
};

export default Blogs;