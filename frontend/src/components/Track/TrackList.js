import React from "react";
import styled from "styled-components";

import { Api } from "../../util/Api";
import { Resource } from "../../util/Resource";
import { Loadable } from "../../util/Loadable";
import TrackEntry from "./TrackEntry";
import TrackForm from "./TrackForm";
import { Container } from "../../util/Theme";
import { Card } from "react-bootstrap";

const TrackList = ({ albumId }) => {
    return (
        <Resource path={Api.tracks}>
            {({ payload, loading, refresh }) => {
                console.log(payload);
                return (
                    <div>
                        <TrackForm
                            refresh={refresh}
                            url={Api.tracks}
                            actionName="Create"
                            albumId={albumId}
                        />
                        <Loadable loading={loading}>
                            {!payload.length && (
                                <Card className="mt-4 text-muted">
                                    <Card.Body>
                                        <Card.Title>
                                            No Tracks to display
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            )}
                            {payload.map((track, index) => {
                                if (track.album_id != albumId) return null;
                                return <TrackEntry track={track} key={index} />;
                            })}
                        </Loadable>
                    </div>
                );
            }}
        </Resource>
    );
};

export default TrackList;
