package com.newapp.chatapp;

import java.io.IOException;

import javax.websocket.DecodeException;
import javax.websocket.Decoder;
import javax.websocket.EndpointConfig;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class MessageDecoder implements Decoder.Text<WebSocketMessage>{

	@Override
	public void destroy() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void init(EndpointConfig arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public WebSocketMessage decode(String arg0) throws DecodeException {
		// TODO Auto-generated method stub
		ObjectMapper mapper=new ObjectMapper();
		WebSocketMessage decodedmessage=new WebSocketMessage();
		try {
			decodedmessage=mapper.readValue(arg0, WebSocketMessage.class);
		} catch (JsonParseException e) {
			e.printStackTrace();
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return decodedmessage;
		
	}

	@Override
	public boolean willDecode(String s) {
		// TODO Auto-generated method stub
		return true;
	}



}
