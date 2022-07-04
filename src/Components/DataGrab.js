import { useState, useEffect } from "react";

const DataGrab = (props) => {

  const [entry, setEntry] = useState('');
  let query = props.query
    const key = 'AIzaSyBtT7_Dcm3TG-gsgniirfhMOMyGp96Ase8'
  let vidList = props.vidList
  
    


  if (!vidList.items || !vidList.items.length ){
    return (
      <h2>No vid list</h2>
    )

  } else {
    console.log(vidList)
    return (
      <div>
        
        <p>Average views:{vidList.averageViews}</p>
        <table>
            <tr>
              <th>Thumbnail</th>
              <th>Title</th>
              <th>Views</th>
              <th>Subscribers</th>
              <th>Outlier Score</th>
            </tr>
        {vidList.items.map((item)=> (
          <tr>
            <td><img src={item.snippet.thumbnails.medium.url}/>{item.snippet.title}</td>
            <td>{item.snippet.title}</td>
            <td><div key ={item.id.videoId}> {item.id.videoId}</div></td>
            <td>{item.views}</td>
          </tr>
        ))}
        </table>
      </div>
    
  )}};

 
export default DataGrab;

//https://bobbyhadz.com/blog/react-push-to-state-array#:~:text=Use%20spread%20syntax%20to%20push,we%20can%20add%20other%20elements.
//https://javascript.plainenglish.io/async-await-foreach-81d4859f2b8c