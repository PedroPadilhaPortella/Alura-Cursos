import React, { useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface AppProps {
  title: string;
  description: string;
  leftButtonMessage: string;
  rightButtonMessage: string;
  onClose: () => void;
  onLeftButtonClick: () => void;
  onRightButtonClick: () => void;
  isVisible: boolean;
}

const App: React.FC<AppProps> = ({
  title,
  description,
  leftButtonMessage,
  rightButtonMessage,
  onLeftButtonClick,
  onRightButtonClick,
  onClose,
  isVisible,
}) => {
  return (
    <Dialog
      open={isVisible}
      slots={{ transition: Transition }}
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onLeftButtonClick}>{leftButtonMessage}</Button>
        <Button onClick={onRightButtonClick}>{rightButtonMessage}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default App;
