// import { useState, useEffect } from "react";

// const DataGrab2 = props => {
//     const query = props.query
//     const key = 'AIzaSyCinJIcuuqP_NESkS8SWgt3xZ194WScuoM'
//     const [list, setList] = useState([]);
//     const [views, setViews] = useState()
    
//     //Hit the Youtube Search API and return 5 videos
//     const displayInfo = (entry) => {
//         console.log("inside useEffect DataGrab2")
//         fetch(
//           `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${key}`
//         )
//           .then(res => res.json())
//           .then(data => {setList(data.items)} )
//           .then(data => {
//               data.items.map(i => {
//                 let videoId = i.id.videoId
//                 let channelId = i.snippet.channelId
//                 getViews(videoId)
//                 let object = {
//                     videoId: i.id.videoId,
//                     views: views
//                 }
//                 console.log(object)
//               }) 
          
//           })
//           .catch(() => console.log("error with fetch"));
//       }

//     const getViews = (videoId) => {
//         fetch(
//             `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&part=contentDetails&id=${videoId}&key=${key}`
//           )
//             .then(res => res.json())
//             .then(data => {
//                setViews(data.items[0].statistics.viewCount)
//             })   
//             .catch(() => console.log("error with fetch"));
//         };

    
//     //store those videos as objects in an array use state
//     //map over those videos and initiate a fetch request for subscribers and a fetch request for views
//     //Store subscrbers in that video Use state
//     //Store views in that video use state

//     //map over that use state array and display the 3 pieces of data you want as list items.
    
    
//     return ( 
//         <h1>it worked</h1>
//      );
// }
 
// export default DataGrab2;