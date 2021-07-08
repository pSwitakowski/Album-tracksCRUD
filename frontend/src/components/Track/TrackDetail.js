import React from "react";
import TrackForm from "./TrackForm";
import { Container } from "../../util/Theme";
import { Api } from "../../util/Api";
import { Resource } from "../../util/Resource";
import { Loadable } from "../../util/Loadable";
import TrackList from "../Track/TrackList";

const TrackDetail = ({ match }) => {
    const { trackId } = match.params;

    return (
        <Container>
            <Resource path={Api.tracks + trackId}>
                {({ payload, loading, refresh }) => {
                    return (
                        <Loadable loading={loading}>
                            <TrackForm
                                refresh={refresh}
                                url={Api.tracks + payload.id + "/"}
                                track={payload}
                                header="Update an Track"
                                actionName="Update"
                            />
                        </Loadable>
                    );
                }}
            </Resource>
        </Container>
    );
};

export default TrackDetail;
