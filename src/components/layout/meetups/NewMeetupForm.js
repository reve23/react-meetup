import React, { useRef,useState } from 'react';
import Card from '../../ui/Card';
import classes from './NewMeetupForm.module.css';
import {storage} from "./Firebase";

const NewMeetupForm = (props) => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");

    const fileChange = e => {
        if (e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }
    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url)
                        setUrl(url);
                    })
            }
        )
    };
    console.log("image: ", image);

    //using useRef hook to take user input
    const titleInputRef =  useRef();
    
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();
//handels the user input
    const submitHandler = (event) =>{
        event.preventDefault();
        //take the user input into a variable
        const enteredTitle = titleInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
//gather them into a object
        const meetupData = {
            title: enteredTitle,
            image: url,
            address: enteredAddress,
            description: enteredDescription,
        };
//use the object
        console.log(meetupData);
        //pass to newmeetup.js to store into firebase realtime database
        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlfor='title'>Meetup Title</label>
                    <input type='text' required id='title'placeholder="Meetup Title" ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlfor='image'>Meetup image</label>
                    
                </div>
                <div>
                    <input type="file" onChange={fileChange} />
                    <button onClick={handleUpload}>Upload</button>
                </div>
                <div className={classes.control}>
                    <label htmlfor='address'>Meetup address</label>
                    <input type='text' required id='address' placeholder="Meetup address" ref={addressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlfor='description'>Description</label>
                    <textarea id='description' required rows='5' placeholder="Description" ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button onClick={submitHandler}>Add meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;
