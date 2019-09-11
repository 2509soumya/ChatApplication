package com.newapp.chatapp;

import java.io.IOException;
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

@ServerEndpoint(value = "/chat/{username}",
encoders = MessageEncoder.class,
decoders = MessageDecoder.class)
public class WsServerEndPoint {
	
	public static final Map<String,List<Session>> user_sess_map=new HashMap<String,List<Session>>();
	//private static final Map<String,List<String>> group_usr_map=new HashMap<String,List<String>>();	
	
	
	@OnOpen
    public void onOpen(Session session,@PathParam("username") String username) throws IOException {
		System.out.println("In onOpen: username is "+  username);
		
		if(user_sess_map.containsKey(username)) {
		user_sess_map.get(username).add(session);
		}
		else{
		List<Session> newlist=new ArrayList<Session>();	
		newlist.add(session);
		user_sess_map.put(username,newlist);	
		}

		System.out.println("Connection info : ");
        for(Map.Entry<String,List<Session>> entry: user_sess_map.entrySet())	
        {
        	System.out.println(entry.getKey() + " is connected in " +  entry.getValue().size() + " sessions");	
        }
    }
 
	// Handle new messages
    @OnMessage
    public void onMessage(Session session, WebSocketMessage message) throws IOException {  
    	System.out.println("In onMessage : the message received is " +message);
    	broadcast(message.getSenderName(),message.getReceiverName(),message);
    }
 
 // WebSocket connection closes
    @OnClose
    public void onClose(Session session,@PathParam("username") String username) throws IOException {   
    	System.out.println("Session closed for user " +  username);
    	System.out.println("Connection info : ");
        for(Map.Entry<String,List<Session>> entry: user_sess_map.entrySet())	
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
    

    
    private void broadcast(String sender,String receiver,WebSocketMessage message){

    	synchronized (user_sess_map) {
    		List<Session> sendersession=user_sess_map.get(sender);
    		List<Session> receiversession=user_sess_map.get(receiver);
                try {
                	
                	if(sendersession!=null && sendersession.size()>0) {
                	for(Session sess : sendersession)
                	{
                		sess.getBasicRemote().sendObject(message);
                	}
                	}
                	
                	if(receiversession!=null && receiversession.size()>0) {
                	for(Session sess : receiversession)
                	{
                		sess.getBasicRemote().sendObject(message);
                	}
                	}
                	
					} catch (IOException e) {
						e.printStackTrace();
					} catch (EncodeException e) {
						e.printStackTrace();
					}
    	}
        
    	
    	
    }
    


}
