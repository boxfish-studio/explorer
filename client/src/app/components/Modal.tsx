import React, { Component, ReactNode } from "react";
import closeIcon from "../../assets/close.svg";
import { ReactComponent as DotsIcon } from "./../../assets/dots.svg";
import { ReactComponent as InfoIcon } from "./../../assets/info.svg";
import "./Modal.scss";
import { ModalProps } from "./ModalProps";
import { ModalState } from "./ModalState";


/**
 * Component which will display a transaction.
 */
class Modal extends Component<ModalProps, ModalState> {
    /**
     * Create a new instance of Modal.
     * @param props The props.
     */
    constructor(props: ModalProps) {
        super(props);
        this.state = {
            show: false
        };
    }

    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return (
            <div className="modal">
                <button
                    type="button"
                    className="modal--icon"
                    onClick={() => this.handleShow()}
                >
                    {this.props.icon === "dots" && (
                        <DotsIcon />

                    )}
                    {this.props.icon === "info" && (
                        <InfoIcon />

                    )}
                </button>
                {this.state.show && (
                    <React.Fragment>
                        <div className="modal--content">
                            <div className="modal--header">

                                <div className="title">
                                    {this.props.data?.title}
                                    <button
                                        type="button"
                                        onClick={() => this.handleHide()}
                                    >
                                        <img src={closeIcon} alt="Close modal" />
                                    </button>
                                </div>
                            </div>
                            <div className="modal--description">
                                <div dangerouslySetInnerHTML={{ __html: this.props.data?.description }} />

                            </div>
                        </div>
                        <div
                            className="modal--bg"
                            onClick={() => {
                                this.handleHide();
                            }}
                        />
                    </React.Fragment>

                )}
            </div>

        );
    }

    private handleShow(): void {
        this.setState({ show: true });
    }

    private handleHide(): void {
        this.setState({ show: false });
    }
}

export default Modal;