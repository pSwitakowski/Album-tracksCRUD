import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { StyledLink } from "../../util/Theme";
import { Api } from "../../util/Api";

const AlbumEntry = ({ album }) => {
    const { id, artist, title, release_date, genre, producer, studio } = album;

    return (
        <Card className="m-5 text-muted">
            <Card.Header className="text-primary">
                <img src="vinyl.png" alt="Vinyl image" height="40px" width="40px"/>
                &nbsp;&nbsp;
                <StyledLink to={"/Albums/" + id}>
                    {artist} - {title}
                </StyledLink>
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    <p>Producer: {producer}</p>
                    <p>Release Date: {release_date}</p>
                    <p>Genre: {genre}</p>
                </Card.Title>
            </Card.Body>
        </Card>
    );
};

export default AlbumEntry;
