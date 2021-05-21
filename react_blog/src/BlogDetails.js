import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const {data:blog,isPending,error} = useFetch("http://localhost:8000/blogs/"+id);
    const history = useHistory();

    const handleClick = () =>{
        fetch("http://localhost:8000/blogs/"+id,{
            method:'DELETE',
        })
        .then(()=>{
            history.push('/');
        });
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error.message}</div>}
            {blog && 
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>
                        {blog.body}
                    </div>
                </article>
            }
            <button onClick = {handleClick}>
                Delete Blog
            </button>
        </div>
    );
}
 
export default BlogDetails;