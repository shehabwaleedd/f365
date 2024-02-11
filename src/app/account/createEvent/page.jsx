'use client'
import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { motion } from 'framer-motion';
import axios from 'axios';
import styles from "./page.module.scss"

const CreateEvent = () => {

    const [eventType, setEventType] = useState('online');
    const labelVariants = {
        active: {
            backgroundColor: 'var(--title-color)', // Assuming these variables are defined in your CSS
            color: 'var(--container-color)',
            padding: '0.3rem 0.5rem',
            borderRadius: '2rem',
            transition: { ease: 'easeOut', duration: 0.3 },
        },
        normal: {
            backgroundColor: 'var(--background-color)',
            color: 'var(--title-color)',
            padding: '0.3rem 0.5rem',
            borderRadius: '2rem',
        },
    };

    const validationSchema = yup.object({
        eventImage: yup.mixed().required('Event main image is required'),
        eventName: yup.string().required('Event name is required'),
        eventStarts: yup.date().required('Start date is required'),
        eventEnds: yup.date().required('End date is required').min(
            yup.ref('eventStarts'),
            'End date can\'t be before start date'
        ),
        eventDetails: yup.string().required('Event details are required'),
        eventLocationOnline: yup.string().when('eventType', {
            is: 'online',
            then: yup.string().required('Online platform link is required'),
        }),
        eventLocationInPerson: yup.string().when('eventType', {
            is: 'inPerson',
            then: yup.string().required('Physical location is required'),
        }),
    });

    const CreateEvent = () => {
        const formik = useFormik({
            initialValues: {
                eventImage: null,
                title: '',
                eventStarts: '',
                eventEnds: '',
                description: '',
                eventType: 'online',
                eventLocationOnline: '',
                eventLocationInPerson: '',
            },
            validationSchema,
            onSubmit: async (values) => {
                console.log(values);
                // You'll need to handle file upload separately or adjust your API to accept multipart/form-data
                // For simplicity, this example assumes JSON payload without file handling
                const formData = new FormData();
                formData.append('eventImage', values.eventImage);
                formData.append('eventName', values.title);
                formData.append('eventStarts', values.eventStarts);
                formData.append('eventEnds', values.eventEnds);
                formData.append('description', values.description);
                formData.append('eventType', values.eventType);
                formData.append('eventLocation', values.eventType === 'online' ? values.eventLocationOnline : values.eventLocationInPerson);

                try {
                    const response = await axios.post('https://events-nsih.onrender.com/events', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });
                    console.log(response.data);
                    // Handle success response
                } catch (error) {
                    console.error('Error creating event:', error.response?.data || error.message);
                    // Handle error response
                }
            },
        });
    }


        return (
            <main className={styles.createEvent}>
                <h1>Create Your Next Event</h1>
                <section className={styles.createEvent__container}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.createEvent__container_content}>
                            <label htmlFor="eventImage">Event&apos;s Main Image</label>
                            <input type="file" id="eventImage" name="eventImage" />
                        </div>
                        <div className={styles.createEvent__container_content}>
                            <label htmlFor="eventName">Event Name</label>
                            <input type="text" id="eventName" name="eventName" placeholder="Enter Event Name" />
                        </div>
                        <div className={styles.createEvent__container_content}>
                            <label htmlFor="eventStarts">Event Starts at</label>
                            <input type="datetime-local" id="eventStarts" name="eventStarts" />
                        </div>
                        <div className={styles.createEvent__container_content}>
                            <label htmlFor="eventEnds">Event Ends at</label>
                            <input type="datetime-local" id="eventEnds" name="eventEnds" />
                        </div>
                        <div className={styles.createEvent__container_content}>
                            <label htmlFor="eventDetails">Event&apos;s Details</label>
                            <textarea id="eventDetails" name="eventDetails" rows="5" placeholder="Enter Event Description"></textarea>
                        </div>
                        <div className={styles.createEvent__container_content}>
                            <label>Event&apos;s Location</label>
                            <div className={styles.createEvent__ontainer_content_radios}>
                                <div>
                                    <input type="radio" id="online" name="eventType" value="online" checked={eventType === 'online'} onChange={() => setEventType('online')} />
                                    <motion.label
                                        htmlFor="online"
                                        variants={labelVariants}
                                        initial={false}
                                        animate={eventType === 'online' ? 'active' : 'normal'}
                                    >
                                        Online
                                    </motion.label>
                                </div>
                                <div>
                                    <input type="radio" id="inPerson" name="eventType" value="inPerson" checked={eventType === 'inPerson'} onChange={() => setEventType('inPerson')} />
                                    <motion.label
                                        htmlFor="inPerson"
                                        variants={labelVariants}
                                        initial={false}
                                        animate={eventType === 'inPerson' ? 'active' : 'normal'}
                                    >
                                        In-Person
                                    </motion.label>
                                </div>
                            </div>
                            {eventType === 'online' ? (
                                <input type="text" id="eventLocationOnline" name="eventLocationOnline" placeholder="Enter online platform link" />
                            ) : (
                                <input type="text" id="eventLocationInPerson" name="eventLocationInPerson" placeholder="Enter physical location or link to map" />
                            )}
                        </div>
                        <button type="submit">Create Event</button>
                    </form>
                </section>
            </main >
        )
    }

    export default CreateEvent