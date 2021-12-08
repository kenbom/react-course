import React from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useRef } from "react";

const NewMeetupForm = () => {
  const refTitle = useRef();
  const refImage = useRef();
  const refAddress = useRef();
  const refDescription = useRef();

  const submitHandler = (event) => {
      event.preventDefault();
    const inputTitle = refTitle.current.value;
    const inputImage = refImage.current.value;
    const inputAddress = refAddress.current.value;
    const inputDescription = refDescription.current.value;
    const formData = {
        title: inputTitle,
        image: inputImage,
        address: inputAddress,
        description: inputDescription,
    }

    console.log(formData)
  };
  return (
     
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={refTitle}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={refImage}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={refAddress} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={refDescription}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
