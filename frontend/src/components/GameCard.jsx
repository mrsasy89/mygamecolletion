import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const GameCard = ({ game }) => (
    <Card>
        <CardMedia component="img" height="140" image={game.coverUrl} alt={game.title} />
        <CardContent>
            <Typography variant="h6">{game.title}</Typography>
            <Typography variant="body2">{game.platform}</Typography>
        </CardContent>
    </Card>
);

export default GameCard;

