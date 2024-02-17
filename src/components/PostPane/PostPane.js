import React from 'react'
import './postPane.css';
import AddPost from '../AddPost/AddPost';
import Post from '../Postt/Post';


export default function PostPane() {
  return (
    <div className='postpanebox'>
      <AddPost />
      <Post/>
      <Post/>
      <Post/>

      
      
      
    </div>
  )
}
