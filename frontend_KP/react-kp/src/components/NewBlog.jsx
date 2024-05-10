import React, { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";
import './styleNewBlog.css'
import ReactConfetti from 'react-confetti';

const NewBlog = () => {

    const[windowDimention, setDimention] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const [conf, setConf] = useState(false);

    const detectSize = () =>{
        setDimention({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };

    useEffect(()=>{
        conf && 
        setTimeout(() => { setConf(false); },4000);
    }, [conf]);

    useEffect(()=>{
        window.addEventListener('resize', detectSize)
        return ()=>{
            window.removeEventListener('resize',detectSize)
        }
    }, [windowDimention]);

    const [blog, setBlog] = useState({
        name: '',
        title: '',
        text: '',
        image: ''
    });

    const handleChange = (e) =>{
        setBlog(prev=>({...prev, [e.target.name] : e.target.value}));
        //console.log(blog.name)
    }

    const handleClick = async e =>{
        e.preventDefault()
        if(blog.name === '' || blog.title === ''|| blog.text === ''|| blog.image === ''){
            console.log('All fields are required');
        }else{
            try{
                await axios.post("http://localhost:8081/blogs", blog)
            }catch(err){
                console.log(err)
            }
            setConf(!conf);
        }
    }

    return(
        <div className="blog-form">
            {conf && <ReactConfetti
                width={windowDimention.width}
                height={windowDimention.height}
            />}
            <form>
                <input type='text' placeholder="Your name" onChange={handleChange} name='name'/>
                <input type='text' placeholder="Title" onChange={handleChange} name='title'/>
                <textarea type='text' placeholder="Body" onChange={handleChange} name='text'/>
                <input type='text' placeholder="Image url" onChange={handleChange} name='image'/>
                <button onClick={handleClick}>Post</button>
            </form>
        </div>
    )
}

export default NewBlog;