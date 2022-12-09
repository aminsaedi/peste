import React, { useState } from "react";

import Image from "next/image";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import ReactMarkdown from "react-markdown";

export default function AppCard({ record }: { record: any }) {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Grid item xs={2} sm={4} md={4}>
        <Card>
          <CardMedia>
            <Image
              src="https://picsum.photos/300/300"
              width={300}
              height={300}
              alt="random image"
              style={{ width: "100%" }}
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {record.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {record.subtitle}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => setOpen(true)} size="small">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{record.title}</DialogTitle>
        <DialogContent dividers>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            <ReactMarkdown>{record.content}</ReactMarkdown>
            {/* {record.content} */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
