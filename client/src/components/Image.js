// import React, { Component } from "react";

// class Image extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             error: null,
//             isLoaded: false,
//             image: null
//         };
//     }
//     componentDidMount() {
//         fetch("/images/image1")
//             .then(res => {}res.json())
//             .then(json => {
//                 this.setState({
//                     isLoaded: true,
//                     image: json
//                 });
//             });
//     }
//     render() {
//         const { error, isLoaded, image } = this.state;
//         console.log(image);
//         if (error) {
//             return <div>Error: {error.message}</div>;
//         } else if (!isLoaded) {
//             return <div>Loading...</div>;
//         } else {
//             return <img src={image.url} alt="Something" />;
//         }
//     }
// }
// export default Image;
