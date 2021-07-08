import { Link } from "react-router-dom";
import styled from "styled-components";
import Form from "react-bootstrap/Form";

export const StyledLink = styled(Link)`
    text-decoration: none;
`;

export const Label = styled.span`
    font-weight: 600;
    text-transform: lowercase;
    color: rgb(135, 149, 161);
    opacity: 0.9;
    font-variant: small-caps;
`;

export const Field = styled(Form.Control)`
    border-radius: 2px !important;
    background-color: rgb(255, 255, 251) !important;
    color: rgb(135, 149, 161);
    text-align: end;
    border: none;
    box-shadow: 2px 2px 2px rgb(220, 220, 220);
`;

export const Container = styled.div`
    width: 50%;
`;
