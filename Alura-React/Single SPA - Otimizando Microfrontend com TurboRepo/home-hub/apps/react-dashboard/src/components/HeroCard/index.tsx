import React from "react";

import { Box, Typography, CardContent, Card } from "@mui/material";

import VisaoGeral from "../../assets/visao-geral.png";

interface HeroCardProps {
  title: string;
  subtitle: string;
}

const HeroCard: React.FC<HeroCardProps> = (props) => {
  return (
    <Card sx={{ background: "#FFF3E0" }}>
      <CardContent>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Box>
            <Typography variant="h5">{props.title}</Typography>
            <Typography>{props.subtitle}</Typography>
          </Box>
          <img src={VisaoGeral} alt="Visão Geral" height={140} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default HeroCard;
