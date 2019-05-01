import React,{Component} from 'react';
import ShowVideos from './ShowVideos';


const { YoutubeDataAPI } = require("youtube-v3-api");
const API_KEY='AIzaSyBakyUTu61y0r6313NMRItE1Y34acdm9SE';


class Youtube extends Component{
    constructor(props){
        super(props);

        this.state={

        }
    }

    

    searchYoutube(e){

        e.preventDefault();
        let q=this.refs.queryText.value;
        this.refs.queryText.value="";
        let results=[] ;
        // console.log(q);
        const api = new YoutubeDataAPI(API_KEY);
        api.searchAll(q,10)
        .then(data => {
            data.items.map((item)=>{
                let result ={
                              videoId:  item.id.videoId,
                              title:     item.snippet.title,
                              thumbnail:  item.snippet.thumbnails.default.url
                    };
                return results.push(result);    
            })
            this.setState({
                results
            });

        })
        .catch(e => console.log(e));

        

    }

    render(){
        return(
           <div>
                <div id="button">
                    <form >
                        <input type="text" name="queryText" placeholder="Enter the query text"
                             ref="queryText" />
                    </form>
                    <button  onClick={this.searchYoutube.bind(this)}>Search</button>
                </div>
                <ShowVideos videoList={this.state}/>
            </div>        
        )
    }
}

export default Youtube;