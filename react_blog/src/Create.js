import {useState} from 'react';
import {useHistory} from 'react-router-dom';

const Create = () => {


    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('mario');
    const [isPending,setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title,body,author};

        setIsPending(true);

        fetch("http://localhost:8000/blogs",{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(blog)
        })
        .then(()=>{
            console.log("new blog added");
            setTimeout(()=>{
                setIsPending(false);
            },1000);
            history.push('/');
        });

    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form >
                <label>Blog Title:</label>
                <input
                    type='text'
                    required
                    value={title}
                    onChange={ (e) => setTitle(e.target.value) }
                >
                </input>
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                >
                </textarea>
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value='mario'>mario</option>
                    <option value='yoshi'>yoshi</option>
                    <option value='charan'>charan</option>
                </select>
                {!isPending && <button onClick={handleSubmit}>Add Blog</button>}
                {isPending && <button onClick={handleSubmit}>Adding Blog...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;