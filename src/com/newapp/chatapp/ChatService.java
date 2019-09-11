package com.newapp.chatapp;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/fetchusers")
public class ChatService {
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<String> listusers() {
		List<String> loggerinusers=new ArrayList<String>();
		loggerinusers.addAll(WsServerEndPoint.user_sess_map.keySet());
         return loggerinusers;
	}

}
