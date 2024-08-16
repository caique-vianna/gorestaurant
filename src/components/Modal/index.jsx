import { useEffect } from "react";
import { useState } from "react";
import ReactModal from "react-modal";

export function Modal(props) {
    const [modal, setModal] = useState(props.isOpen);

    useEffect; {
        () => {
            setModal(props.isOpen);
        }, [props.isOpen];
    }

    return (
        <ReactModal
            shouldCloseOnOverlayClick={!false}
            onRequestClose={modal}
            isOpen={props.modalSatus}
            style={{
                content: {
                    top: "50%",
                    left: "50%",
                    right: "auto",
                    bottom: "auto",
                    marginRight: "-50%",
                    transform: "translate(-50%, -50%)",
                    background: "#F0F0F5",
                    color: "#000",
                    borderRadius: "8px",
                    width: "736px",
                    border: "none",
                },
                overlay: {
                    backgroundColor: "#121212e6"
                },
            }}

        >
            {props.children}
        </ReactModal>
    );




}