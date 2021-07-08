import React from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

import styled from "styled-components";
import { Container, Col } from "react-bootstrap";
import { Label, Field } from "../../util/Theme";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Api } from "../../util/Api";
import { withRouter } from "react-router";

const AlbumForm = withRouter(({ history, refresh, album, url, actionName }) => {
    if (!album) album = {};

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.target));
        console.log(data);
        let action = actionName === "Create" ? axios.post : axios.patch;

        action(url, data)
            .then((res) => {
                alert(actionName + "d succesfully");
                event.target.reset();
                refresh();
            })
            .catch((err) => {
                console.log(err.response);
                alert("Please fill all the fields");
            });
    };

    const onDelete = () => {
        axios
            .delete(url)
            .then((res) => {
                alert("Deleted Succesfully");
                history.push("/Albums/");
            })
            .catch((err) => {
                alert("Something went wrong");
            });
    };

    return (
        <Card>
            <Card.Header className="text-muted text-uppercase">
                {actionName} an album
            </Card.Header>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Row className="d-flex">
                        <Form.Group as={Col} xs={6} className="p-2">
                            <Label>Artist</Label>
                            <Field
                                type="text"
                                name="artist"
                                defaultValue={album.artist}
                            />
                        </Form.Group>
                        <Form.Group as={Col} xs={6} className="p-2">
                            <Label>Title</Label>
                            <Field
                                type="text"
                                name="title"
                                defaultValue={album.title}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Label>Producer</Label>
                            <Field
                                type="text"
                                name="producer"
                                defaultValue={album.producer}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Label>Genre</Label>
                            <Field
                                type="text"
                                name="genre"
                                defaultValue={album.genre}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Label>Release Date</Label>
                            <Field
                                type="date"
                                name="release_date"
                                defaultValue={album.release_date}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className="pt-4 d-flex justify-content-center mb-2">
                        <Form.Group as={Col} xs={6}>
                            <Button type="submit">{actionName}</Button>
                        </Form.Group>
                        {actionName === "Update" && (
                            <Form.Group as={Col} xs={6}>
                                <Button variant="danger" onClick={onDelete}>
                                    Delete
                                </Button>
                            </Form.Group>
                        )}
                    </Form.Row>
                </Form>
            </Container>
        </Card>
    );
});

export default AlbumForm;
