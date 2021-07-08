import React from "react";
import styled from "styled-components";

import { Api } from "../../util/Api";
import { Resource } from "../../util/Resource";
import { Loadable } from "../../util/Loadable";
import AlbumEntry from "./AlbumEntry";
import AlbumForm from "./AlbumForm";
import { Container } from "../../util/Theme";
import { Card } from "react-bootstrap";

const AlbumList = () => {
    return (
        <Container className="full-width">
            <Resource path={Api.albums}>
                {({ payload, loading, refresh }) => {
                    console.log(payload);
                    return (
                        <div>
                            <AlbumForm
                                refresh={refresh}
                                url={Api.albums}
                                actionName="Create"
                            />
                            <Loadable loading={loading}>
                                {!payload.length && (
                                    <Card className="mt-4 text-muted">
                                        <Card.Body>
                                            <Card.Title>
                                                No Albums to display
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                )}
                                {payload.map((album, index) => (
                                    <AlbumEntry album={album} key={index} />
                                ))}
                            </Loadable>
                        </div>
                    );
                }}
            </Resource>
        </Container>
    );
};

export default AlbumList;
