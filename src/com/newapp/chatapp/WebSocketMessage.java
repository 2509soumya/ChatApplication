package com.newapp.chatapp;

public class WebSocketMessage {
	
	
	private String payload;
	private String senderName;
	private String receiverName;
	private String receiverGroupName;
	private boolean hasVideo;
	
	
	public boolean isHasVideo() {
		return hasVideo;
	}
	public void setHasVideo(boolean hasVideo) {
		this.hasVideo = hasVideo;
	}
	
	public String getPayload() {
		return payload;
	}
	public void setPayload(String payload) {
		this.payload = payload;
	}
	public String getSenderName() {
		return senderName;
	}
	public void setSenderName(String senderName) {
		this.senderName = senderName;
	}
	public String getReceiverName() {
		return receiverName;
	}
	public void setReceiverName(String receiverName) {
		this.receiverName = receiverName;
	}
	public String getReceiverGroupName() {
		return receiverGroupName;
	}
	public void setReceiverGroupName(String receiverGroupName) {
		this.receiverGroupName = receiverGroupName;
	}
	
	

}
