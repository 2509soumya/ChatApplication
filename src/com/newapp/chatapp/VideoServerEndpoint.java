package com.newapp.chatapp;

import java.io.IOException;
import java.nio.ByteBuffer;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.websocket.EncodeException;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint(value = "/video/{sendername}/{receiver}")

public class VideoServerEndpoint {
	
	public static final Map<String,List<Session>> viduser_sess_map=new HashMap<String,List<Session>>();
	
	@OnOpen
    public void onOpen(Session session,@PathParam("sendername") String username,@PathParam("receiver") String receiver) throws IOException, EncodeException {
		System.out.println("In onOpen of video call: username is "+  username);
		session.setMaxBinaryMessageBufferSize(1024*512);	
		
		if(!viduser_sess_map.containsKey(receiver)) {
		WebSocketMessage videocallmessage=new WebSocketMessage();
		videocallmessage.setHasVideo(true);
		videocallmessage.setSenderName(username);
		videocallmessage.setReceiverName(receiver);
		videocallmessage.setPayload("Call from "+username);
		
		for(Session sess: WsServerEndPoint.user_sess_map.get(receiver)) {
			sess.getBasicRemote().sendObject(videocallmessage);
		}
		}
		
		
		if(viduser_sess_map.containsKey(username)) {
			viduser_sess_map.get(username).add(session);
		}
		else{
		List<Session> newlist=new ArrayList<Session>();	
		newlist.add(session);
		viduser_sess_map.put(username,newlist);	
		}
		
		

		System.out.println("Video Connection info : ");
        for(Map.Entry<String,List<Session>> entry: viduser_sess_map.entrySet())	
        {
        	System.out.println(entry.getKey() + " is connected in " +  entry.getValue().size() + " sessions");	
        }
    }
 
	// Handle new messages
    @OnMessage
    public void onMessage(byte[] imageData,Session session,@PathParam("sendername") String sendername,@PathParam("receiver") String receiver) throws IOException {  
    	System.out.println("In video onMessage : the message received is ");
    	
    	  try {
              broadcastVideo(sendername,receiver,imageData);
       } catch (Throwable ioe) {
              System.out.println("Error sending message " + ioe.getMessage());
       } 	
    	
    }
 
 // WebSocket connection closes
    @OnClose
    public void onClose(Session session,@PathParam("sendername") String sendername) throws IOException {   
    	System.out.println("Session closed for user " +  sendername);
    	System.out.println("Connection info : ");
        for(Map.Entry<String,List<Session>> entry: viduser_sess_map.entrySet())	
        {
        	entry.getValue().remove(session);	
        }
    }
 
    @OnError
    public void onError(Session session, Throwable throwable) {
        // Do error handling here
    	System.out.println("Session errored");
    	throwable.printStackTrace();
    }
    
    
    private void broadcastVideo(String sender,String receiver,byte[] videostream){

    	synchronized (viduser_sess_map) {
    		//List<Session> sendersession=user_sess_map.get(sender);
    		List<Session> receiversession=viduser_sess_map.get(receiver);
                try {                	
                	if(receiversession!=null && receiversession.size()>0) {
                	ByteBuffer buf = ByteBuffer.wrap(videostream);
                	for(Session sess : receiversession)
                	{
                		sess.getBasicRemote().sendBinary(buf);
                	}
                	}
             	
  					} catch (IOException e) {
						e.printStackTrace();
					} catch (Exception e) {
						e.printStackTrace();
					}
    	}	
    	
    }

}
