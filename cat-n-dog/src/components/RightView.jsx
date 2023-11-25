import React from "react";

import "../styles/RightView.css";

class RightView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoNumber: 1,
        };

        this.changeImage = this.changeImage.bind(this);
    }

    changeImage(imageNumber) {
        this.setState({ photoNumber: imageNumber });
    }

    render() {
        const rightViewModifierClass =
            this.state.photoNumber === 1
                ? "right-view--photo1"
                : "right-view--photo2";
        return (
            <div className={`right-view ${rightViewModifierClass}`}>
                <div className="right-view__content-wrapper">
                    <div className="right-view__content">
                        <div className="right-view__content__heading">
                            <h3>Type Text</h3>
                        </div>
                        <div className="right-view__content__paragraph">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </p>
                        </div>
                    </div>
                    <div className="right-view__buttons-div">
                        <button
                            className={
                                this.state.photoNumber === 1
                                    ? "right-view__buttons-div__button right-view__buttons-div__button--inactive"
                                    : "right-view__buttons-div__button right-view__buttons-div__button--active"
                            }
                            type="button"
                            disabled={
                                this.state.photoNumber === 1 ? true : false
                            }
                            onClick={() => this.changeImage(1)}
                        />
                        <button
                            className={
                                this.state.photoNumber === 2
                                    ? "right-view__buttons-div__button right-view__buttons-div__button--inactive"
                                    : "right-view__buttons-div__button right-view__buttons-div__button--active"
                            }
                            type="button"
                            disabled={
                                this.state.photoNumber === 2 ? true : false
                            }
                            onClick={() => this.changeImage(2)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default RightView;
