import React, { Fragment, useEffect, useState } from 'react'
import CommentService from '../Services/CommentService'
import classes from "../AdminPage/Admin.module.css";


const ListMeals = () => {

    const [comments, setComments] = useState([])

    useEffect(() => {

        const interval = setInterval(() => {
            CommentService.getAllComments().then((response) => {
                setComments(response.data)
                // console.log(response.data)
            }).catch(error => {
                console.log(error);
            })

        }, 1000);

        return () => clearInterval(interval);

    }, [])

    return (
        <Fragment>

            <br></br><br></br>
            <div className={classes.cont} style={{width:"50%"}}>
                <h3 className="text-center">Comments</h3>
                <table id={classes.table} className="table rounded shadow">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            comments.map(
                                comment =>
                                    <tr key={comment.id}>
                                        <td data-label="No">{comment.id}</td>
                                        <td data-label="Comment">{comment.comment}</td>

                                    </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
            <br></br><br></br>
        </Fragment>
    )
}

export default ListMeals;