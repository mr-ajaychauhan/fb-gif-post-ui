import React from 'react'
import ComposePost from './ComposePost'
import {Button} from "@material-ui/core"


const Main = () => {
    return (
        <div>
            <Button onClick="">Compose Post</Button>
            <Button>Photo/Video Album</Button>
            <Button>Live Video</Button>
            <ComposePost />
            
        </div>
    )
}

export default Main
