import React from "react";
import "./styles/index.css";
import _ from "lodash";
import {If, Then} from "react-if";

class ReactVibes extends React.Component {


    constructor(props) {
        super(props);

        this.state = {

            showAllExcept: props.showAllExcept || [],

            happyCounter: props.happyCounter || 0,
            amusedCounter: props.amusedCounter || 0,
            inLoveCounter: props.inLoveCounter || 0,
            shockedCounter: props.shockedCounter || 0,
            angryCounter: props.angryCounter || 0,
            sadCounter: props.sadCounter || 0,

        };


    }

    componentDidMount = () => {

        let _self = this;
        let emojis = window.document.querySelectorAll(".reaction .emoji");

        for (let i = 0; i < emojis.length; i++) {
            // Add actions on click
            emojis[i].parentNode.addEventListener("click", function (event) {
                event.preventDefault();
                event.stopPropagation();

                let currentFeeling = emojis[i].parentNode.querySelector(".reaction .text").id || "";

                let counter = parseInt(this.querySelectorAll(".reaction .count")[0].innerText) + 1;

                if (currentFeeling === "happy") {

                    _self.setState({happyCounter: counter});

                } else if (currentFeeling === "amused") {

                    _self.setState({amusedCounter: counter});

                } else if (currentFeeling === "inLove") {

                    _self.setState({inLoveCounter: counter});

                } else if (currentFeeling === "shocked") {

                    _self.setState({shockedCounter: counter});

                } else if (currentFeeling === "angry") {

                    _self.setState({angryCounter: counter});

                } else if (currentFeeling === "sad") {
                    _self.setState({sadCounter: counter});
                }

                emojis[i].parentNode.querySelectorAll(".reaction .count")[0].innerText = counter;

                if (!event.data) {
                    event.data = {};
                }
                event.data.emoji = currentFeeling;
                event.data.counter = counter;

                _.invoke(_self.props, 'onClick', event.data, {});

            });
        }
    };


    render = () => {

        return (
            <div id="container-emoji">

                <div className="content-emoji">

                    <If condition={this.state.showAllExcept.indexOf("happy") === -1}>
                        <Then>
                            <div className="reaction">
                                <div className="emoji">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
                                        <circle fill="#FFDD67" cx="32" cy="32" r="30"/>
                                        <circle fill="#664E27" cx="20.5" cy="24.5" r="5"/>
                                        <circle fill="#664E27" cx="43.5" cy="24.5" r="5"/>
                                        <path fill="#664E27" d="M49.001 38.05c0-.803-.475-1.808-1.822-2.066-3.465-.662-8.582-1.343-15.18-1.343-6.595 0-11.714.681-15.177 1.343-1.35.258-1.822 1.263-1.822 2.066 0 7.271 5.611 14.591 17 14.591 11.388 0 17.001-7.32 17.001-14.591z"/>
                                        <path fill="#FFF" d="M44.69 38.283c-2.195-.368-6.838-1.013-12.69-1.013-5.853 0-10.496.645-12.691 1.013-1.294.218-1.373.743-1.283 1.486.054.442.137.975.265 1.553.142.64.262.936 1.266.816 1.92-.229 22.967-.229 24.888 0 1.004.119 1.123-.177 1.266-.816.127-.578.211-1.11.264-1.553.088-.743.01-1.268-1.285-1.486z"/>
                                    </svg>

                                </div>
                                <div className="count">{this.state.happyCounter}</div>
                                <div className="text" id="happy">happy</div>
                            </div>
                        </Then>
                    </If>

                    <If condition={this.state.showAllExcept.indexOf("amused") === -1}>
                        <div className="reaction">
                            <div className="emoji">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
                                    <circle fill="#FFDD67" cx="32" cy="32" r="30"/>
                                    <path fill="#664E27" d="M49.696 34.436c-.406-.52-1.127-.43-1.912-.43H16.216c-.785 0-1.505-.09-1.912.43C10.394 39.422 14.994 54 32 54c17.007 0 21.606-14.578 17.696-19.564z"/>
                                    <path fill="#4C3526" d="M33.843 41.74c-.578-.014-1.47.527-1.144 1.957.163.723 1.19 1.598 1.19 2.764 0 2.371-3.777 2.371-3.777 0 0-1.166 1.025-2.041 1.19-2.764.326-1.43-.565-1.971-1.145-1.957-1.571.041-4.149 1.736-4.149 4.605 0 3.223 2.684 5.836 5.992 5.836 3.307 0 5.99-2.613 5.99-5.836.001-2.868-2.577-4.564-4.147-4.605z"/>
                                    <path fill="#FF717F" d="M24.287 50.664c2.229.957 4.8 1.518 7.713 1.518 2.914 0 5.484-.561 7.713-1.518-2.15-1.031-4.711-1.662-7.713-1.662s-5.561.631-7.713 1.662z"/>
                                    <path fill="#FFF" d="M46.954 36H17.047c-2.053 0-2.053 4-.053 4h30.013c2 0 2-4-.053-4z"/>
                                    <g fill="#65B1EF">
                                        <path d="M59.44 36.874c7.307 7.679-2.621 18.116-9.93 10.437-5.336-5.611-5.578-16.301-5.578-16.301s10.174.257 15.508 5.864zM14.488 47.311C7.183 54.99-2.749 44.553 4.56 36.874c5.336-5.608 15.508-5.864 15.508-5.864s-.244 10.693-5.58 16.301z"/>
                                    </g>
                                    <g fill="#664E27">
                                        <path d="M28.526 28.669C26.667 23.558 23.866 21 21.065 21s-5.602 2.558-7.46 7.669c-.184.515.774 1.443 1.254.938 1.802-1.901 3.957-2.658 6.206-2.658 2.25 0 4.405.757 6.207 2.658.478.505 1.438-.423 1.254-.938zM50.396 28.669C48.536 23.558 45.735 21 42.935 21s-5.602 2.558-7.461 7.669c-.184.515.775 1.443 1.254.938 1.803-1.901 3.957-2.658 6.207-2.658s4.404.757 6.207 2.658c.478.505 1.437-.423 1.254-.938z"/>
                                    </g>
                                </svg>
                            </div>
                            <div className="text" id="amused">amused</div>
                            <div className="count">{this.state.amusedCounter}</div>
                        </div>
                    </If>

                    <If condition={this.state.showAllExcept.indexOf("inLove") === -1}>
                        <div className="reaction">
                            <div className="emoji">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
                                    <path fill="#FFDD67" d="M62 31.999C62 48.568 48.568 62 32.002 62 15.434 62 2 48.568 2 31.999 2 15.432 15.434 2 32.002 2 48.568 2 62 15.432 62 31.999z"/>
                                    <path fill="#F46767" d="M61.848 13.219c-.463-2.654-2.031-4.889-4.463-5.553-2.654-.727-5.082.316-7.438 2.703-1.32-3.631-3.338-6.326-6.52-7.709-3.259-1.421-6.427-.464-8.425 2.063-2.076 2.629-2.902 6.678-.68 11.975C36.404 21.657 45.734 31.709 46.004 32c.363-.227 10.754-6.721 13.299-9.908 2.49-3.121 3.006-6.228 2.545-8.873zM29.002 4.723c-1.996-2.527-5.166-3.484-8.426-2.063-3.184 1.383-5.201 4.078-6.523 7.709C11.697 7.983 9.27 6.94 6.615 7.667c-2.43.664-4 2.898-4.463 5.553-.459 2.645.057 5.752 2.545 8.873C7.244 25.28 17.637 31.774 18 32c.268-.291 9.6-10.344 11.682-15.303 2.222-5.296 1.396-9.345-.68-11.974z"/>
                                    <path fill="#664E27" d="M49 38.051c0-.803-.474-1.809-1.822-2.066-3.464-.662-8.582-1.344-15.179-1.344h-.001c-6.595 0-11.714.682-15.177 1.344-1.35.258-1.822 1.264-1.822 2.066 0 7.271 5.611 14.59 16.999 14.59h.001C43.388 52.641 49 45.322 49 38.051z"/>
                                    <path fill="#FFF" d="M44.69 38.283c-2.195-.367-6.838-1.012-12.69-1.012-5.854 0-10.496.645-12.691 1.012-1.294.219-1.373.744-1.283 1.486.054.443.137.975.265 1.553.142.641.262.936 1.266.816 1.921-.229 22.968-.229 24.888 0 1.004.119 1.123-.176 1.266-.816.127-.578.211-1.109.265-1.553.087-.742.008-1.267-1.286-1.486z"/>
                                </svg>
                            </div>
                            <div className="text" id="inLove">in love</div>
                            <div className="count">{this.state.inLoveCounter}</div>
                        </div>
                    </If>

                    <If condition={this.state.showAllExcept.indexOf("shocked") === -1}>
                        <div className="reaction">
                            <div className="emoji">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
                                    <circle fill="#FFDD67" cx="31.996" cy="32" r="30"/>
                                    <circle fill="#664E27" cx="31.996" cy="45.138" r="7"/>
                                    <circle fill="#664E27" cx="20.244" cy="25.044" r="4.5"/>
                                    <circle fill="#664E27" cx="42.746" cy="25.044" r="4.5"/>
                                </svg>
                            </div>
                            <div className="text" id="shocked">shocked</div>
                            <div className="count">{this.state.shockedCounter}</div>
                        </div>
                    </If>

                    <If condition={this.state.showAllExcept.indexOf("angry") === -1}>
                        <div className="reaction">
                            <div className="emoji">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
                                    <circle fill="#FFDD67" cx="32" cy="32" r="30"/>
                                    <path fill="#664E27" d="M40.988 49.665c-5.793-4.8-12.219-4.771-17.977 0-.693.573-1.318-.421-.849-1.339 1.755-3.435 5.299-6.492 9.837-6.492s8.081 3.058 9.836 6.492c.472.918-.153 1.912-.847 1.339z"/>
                                    <path fill="#FFF" d="M10.166 24.935c-1.548 4.728.646 9.975 5.27 12.128 4.615 2.154 10.039.467 12.667-3.746l-6.895-7.721-11.042-.661z"/>
                                    <path fill="#664E27" d="M14.241 25.775a5.825 5.825 0 1 0 10.558 4.924c.861-1.851-9.695-6.775-10.558-4.924z"/>
                                    <path fill="#664E27" d="M10.166 24.936c1.586-1.035 3.474-1.463 5.388-1.455 1.92.018 3.84.469 5.589 1.279 1.744.801 3.346 1.98 4.596 3.441 1.24 1.461 2.162 3.23 2.365 5.115-1.33-1.33-2.605-2.43-3.971-3.387a27.277 27.277 0 0 0-4.25-2.449 27.67 27.67 0 0 0-4.621-1.666c-1.615-.431-3.225-.697-5.096-.878z"/>
                                    <g>
                                        <path fill="#FFF" d="M53.834 24.935c1.547 4.728-.646 9.975-5.27 12.128-4.615 2.154-10.039.467-12.668-3.746l6.895-7.721 11.043-.661z"/>
                                        <path fill="#664E27" d="M49.76 25.775a5.825 5.825 0 1 1-10.558 4.924c-.862-1.851 9.694-6.775 10.558-4.924z"/>
                                        <path fill="#664E27" d="M53.834 24.936c-1.586-1.035-3.473-1.463-5.387-1.455-1.92.018-3.84.469-5.59 1.279-1.744.801-3.346 1.98-4.596 3.441-1.24 1.461-2.162 3.23-2.365 5.115 1.33-1.33 2.605-2.43 3.971-3.387a27.277 27.277 0 0 1 4.25-2.449 27.67 27.67 0 0 1 4.621-1.666c1.616-.431 3.225-.697 5.096-.878z"/>
                                    </g>
                                </svg>
                            </div>
                            <div className="text" id="angry">angry</div>
                            <div className="count">{this.state.angryCounter}</div>
                        </div>
                    </If>

                    <If condition={this.state.showAllExcept.indexOf("sad") === -1}>
                        <div className="reaction">
                            <div className="emoji">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
                                    <circle fill="#FFDD67" cx="32" cy="32" r="30"/>
                                    <path fill="#664E27" d="M40.581 46.428c-5.403-2.538-11.786-2.54-17.196-.012-1.338.645.33 4.15 1.662 3.5 3.572-1.665 8.896-2.306 13.875.01 1.334.619 3.077-2.813 1.659-3.498z"/>
                                    <path fill="#FFF" d="M54 31a9 9 0 0 1-18 0c0-4.967 4.029-9 9-9 4.969 0 9 4.033 9 9z"/>
                                    <circle fill="#664E27" cx="45" cy="31" r="6"/>
                                    <ellipse fill="#FFF" cx="46.552" cy="35.469" rx="2.812" ry="3.25"/>
                                    <ellipse fill="#FFF" cx="42.779" cy="31" rx="1.645" ry="1.902"/>
                                    <g>
                                        <path fill="#FFF" d="M28 31a9 9 0 0 1-18 0c0-4.967 4.029-9 9-9 4.969 0 9 4.033 9 9z"/>
                                        <circle fill="#664E27" cx="19" cy="31" r="6"/>
                                        <ellipse fill="#FFF" cx="20.551" cy="35.469" rx="2.811" ry="3.25"/>
                                        <ellipse fill="#FFF" cx="16.778" cy="31" rx="1.644" ry="1.902"/>
                                    </g>
                                    <g>
                                        <path fill="#65B1EF" d="M46.996 36C41.916 42.771 39 49.002 39 54.123 39 58.475 42.58 62 47 62c4.416 0 8-3.525 8-7.877 0-5.121-3.004-11.457-8.004-18.123z"/>
                                    </g>
                                    <g fill="#917524">
                                        <path d="M53.201 20.697a14.228 14.228 0 0 0-11.691-3.133c-.58.113-1.09-2.021-.387-2.156a16.417 16.417 0 0 1 13.492 3.615c.541.469-.969 2.061-1.414 1.674zM22.486 17.414c-4.168-.748-8.455.4-11.691 3.133-.443.389-1.955-1.205-1.412-1.674a16.418 16.418 0 0 1 13.492-3.615c.703.135.191 2.269-.389 2.156z"/>
                                    </g>
                                </svg>
                            </div>
                            <div className="text" id="sad">sad</div>
                            <div className="count">0</div>
                        </div>
                    </If>
                </div>
            </div>

        );

    }

}

export {ReactVibes};

