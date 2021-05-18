import React from "react";
import {
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from "reactstrap";

interface Props {
    children?: JSX.Element;
    isOpen: boolean;
    onConfirm: () => void;
    onReject: () => void;
}

const ModalConfirm = (props: Props) => {
    return (
        <>
            <Modal isOpen={props.isOpen} toggle={props.onReject}>
                <ModalHeader><em className="ion ion-ios-checkmark-circle"></em> Confirm</ModalHeader>
                <ModalBody>
                    {props.children}
                </ModalBody>
                <ModalFooter>
                    <button className="px-button" onClick={props.onReject}>Cancel</button>{' '}
                    <button className="px-button pink" onClick={props.onConfirm}>Confirm</button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default ModalConfirm;