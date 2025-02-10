import { Container, Divider, Typography } from "@mui/material";
import { useLocation } from "react-router";

export default function ServerError() {
    const { state } = useLocation();
    return (
        <Container>
            { 
            state?.error ? (
                <>
                    <Typography>Error {state.error.title} - {state.status}</Typography>
                    <Divider/>
                    <Typography>{state.error.detail || "Error"}</Typography>
                </>
            ) : (
                <Typography>
                    Error
                </Typography>
            )}
        </Container>
    );
}