import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner'; // Import Spinner from Bootstrap
import noteContext from '../context/Notes/Notecontext';
import { useNavigate } from 'react-router-dom';
import Navbar2 from "./Navbar2";
import './file.css';
import { Link } from 'react-router-dom'; 

function FormGroupExample(props) {
    const [t, sett] = useState({ username: '', password: '' });
    const [loading, setLoading] = useState(false); // Track loading state
    const { Log, getall } = useContext(noteContext);
    let navigate = useNavigate();
    
    const handleChange = (e) => {
        sett({ ...t, [e.target.name]: e.target.value });
    };

    const handle = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading

        const success = await Log({ username: t.username, password: t.password });

        if (success === true) {
            console.log("Login successful!");
            await getall(); // Wait for getall() to complete
            setLoading(false); // Stop loading when done
            navigate('/Home');
        } else {
            console.log("Login failed.");
            setLoading(false); // Stop loading if login fails
        }
    };

    return (
        <div>
            <Navbar2 />
            <Form className="f">
                <Form.Group className="mb-3" controlId="formGroupUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        name="username"
                        value={t.username}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        value={t.password}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button className="my-3" onClick={handle} disabled={loading}>
                    {loading ? (
                        <>
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            /> Loading...
                        </>
                    ) : (
                        "Login"
                    )}
                </Button>
                <Button className="mx-3" as={Link} to="/Signup">
                    Sign up
                </Button>
            </Form>
        </div>
    );
}

export default FormGroupExample;
