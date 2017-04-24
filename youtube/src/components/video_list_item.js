import React, { Component } from 'react';

class VideoListItem extends Component {

	render(){
		const video = this.props.video;
		const imageUrl = video.snippet.thumbnails.default.url;
		console.log(video);
		return(
			<li onClick={()=> this.props.onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
			<div className="media-left">
			<img className="media-object" src={imageUrl} alt={video.snippet.title} />
			</div>

			<div className="media-body">
			<div className="media-heading">{video.snippet.title}</div>
			</div>
			</div>
			</li>
			);
	}

}

export default VideoListItem;