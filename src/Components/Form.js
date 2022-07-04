import { useEffect, useState } from "react";
import DataGrab from "./DataGrab.js"



//Takes in a query from a form
const Form = () => {
    const [entry, setEntry] = useState('');
    const [query, setQuery] = useState('');
    const key = 'AIzaSyBtT7_Dcm3TG-gsgniirfhMOMyGp96Ase8'
    const [vidList, setVidList] = useState([]);
    const [v, setV] = useState(0);
    

 //Handle Submit Function   
    const handleSubmit = event => {
        event.preventDefault();
      setQuery(entry);
      setEntry(""); 
      fetchData()
    };

//Get 5 videos based on query
const getItems = () => {
    console.log("inside getItems")
           return fetch(
              `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${key}`
            )
              .then(res => res.json())
              
}
// Get Views Function Makes call to Youtube Videos endpoint and returns number of views
const getVideo = (id) => {
    console.log("inside getVideo")
           return fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=statistics&part=contentDetails&id=${id}&key=${key}`
            )
              .then(res => res.json())
              
}
// Get channel Function Makes call to Youtube channels endpoint and returns number of subscribers
const getChannel = (channelId) => {
    console.log("inside Channel")
           return fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${key}`
            )
              .then(res => res.json())
              
}


//initialize an aysnyc fetch call every time query changes that goes to the youtube Search endpoint and returns 5 videos
//for item in (the returned items) (not map or foreach) run 2 await fetch calls and assign their values to viewcount and subcount

const fetchData = async () => {
    const items = await getItems()
        setVidList({items:[]})
            let totalViews = 0;
                for (var i= 0; i < items.items.length; i++) {
                    items.items[i].videostats = await getVideo(items.items[i].id.videoId)
                    items.items[i].channelstats = await getChannel(items.items[i].snippet.channelId)
                    items.items[i].views = items.items[i].videostats.items[0].statistics.viewCount
                    items.items[i].subscribers = items.items[i].channelstats.items[0].statistics.subscriberCount
                    totalViews += Number(items.items[i].videostats.items[0].statistics.viewCount)
                }
                let averageViews = totalViews/items.items.length
                items.items.sort((a,b) => b.views-a.views)
            // setVidList(current => items.items)
            items.averageViews = averageViews;
            setVidList(current => items)
            console.log(vidList)    
          return (
            <h2> it worked!</h2>
          )

        };


    return (
        <section class="section">
                    <div className="control">
                        <form onSubmit={handleSubmit}>
                            <input type="text" id="query" placeholder="Enter some keywords" onChange={event =>setEntry(event.target.value)}/>
                            <input type="submit" value="Find Big Ideas"/>
                            </form>
                    </div>
            <div>
            <ul class="list-group">
                    
                </ul>
            </div>
            <DataGrab query={query} vidList={vidList}/>
                    
      </section> 

     );
}
 
export default Form;
