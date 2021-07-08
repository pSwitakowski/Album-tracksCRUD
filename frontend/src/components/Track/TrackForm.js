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

const TrackForm = withRouter(
    ({ history, refresh, track, url, actionName, albumId }) => {
        if (!track) track = {};

        const handleSubmit = (event) => {
            event.preventDefault();
            const data = Object.fromEntries(new FormData(event.target));
            data.album_id = albumId;
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
                    history.push("/Albums/" + track.album_id);
                })
                .catch((err) => {
                    alert("Something went wrong");
                });
        };

        return (
            <Card className="m-4">
                <Card.Header className="text-muted text-uppercase">
                    {actionName} track
                </Card.Header>
                <Container>
                    <Form onSubmit={handleSubmit}>
                        <Form.Row className="d-flex">
                            <Form.Group as={Col}>
                                <Label>Title</Label>
                                <Field
                                    type="text"
                                    name="title"
                                    defaultValue={track.title}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Label>Length [s]</Label>
                                <Field
                                    type="text"
                                    name="length"
                                    defaultValue={track.length}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Label>Format</Label>
                                <Field
                                    type="text"
                                    name="track_format"
                                    defaultValue={track.track_format}
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
    }
);

export default TrackForm;
