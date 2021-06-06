import React, { Fragment } from "react";
import ReactDom from "react-dom";

import classes from "./overlay.module.css";

const Backdrop: React.FC <{onClose: () => void}> = (props) => {
    return (
        <div
            className={classes.backdrop}
            onClick={props.onClose} 
        />
    );
};

const OverlayModal: React.FC <{}> = (props) => {
    return (
        <div className={classes.overlay}>
            <div>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById("overlay") as HTMLElement;

const Overlay:React.FC<{onCloseCard: () => void}> = (props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(
                <Backdrop onClose={props.onCloseCard} />, portalElement
            )}
            {ReactDom.createPortal(
                <OverlayModal>{props.children}</OverlayModal>, portalElement
            )}
        </Fragment>
    );
};

export default Overlay;