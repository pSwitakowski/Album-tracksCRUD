import React from "react";
import AlbumForm from "./AlbumForm";
import { Container } from "../../util/Theme";
import { Api } from "../../util/Api";
import { Resource } from "../../util/Resource";
import { Loadable } from "../../util/Loadable";
import TrackList from "../Track/TrackList";
import TrackForm from "../Track/TrackForm";

const AlbumDetail = ({ match }) => {
    const { albumId } = match.params;

    return (
        <Container>
            <Resource path={Api.albums + albumId}>
                {({ payload, loading, refresh }) => {
                    return (
                        <Loadable loading={loading}>
                            <AlbumForm
                                refresh={refresh}
                                url={Api.albums + payload.id + "/"}
                                album={payload}
                                header="Update an Album"
                                actionName="Update"
                            />
                            <div className="m-3"></div>
                            <TrackList albumId={albumId} />
                        </Loadable>
                    );
                }}
            </Resource>
        </Container>
    );
};

export default AlbumDetail;
