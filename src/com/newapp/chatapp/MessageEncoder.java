package com.newapp.chatapp;

import javax.websocket.EncodeException;
import javax.websocket.Encoder;
import javax.websocket.EndpointConfig;

import com.fasterxml.jackson.databind.ObjectMapper;

public class MessageEncoder implements Encoder.Text<WebSocketMessage>{
	
	    @Override
	    public void init(EndpointConfig ec) {
	    }

	    @Override
	    public void destroy() {
	    }

	    @Override
	    public String encode(WebSocketMessage message) throws EncodeException {
	        try {
	        	ObjectMapper mapper=new ObjectMapper();
	            return mapper.writeValueAsString(message);
	        } catch (Exception e) {
	            throw new EncodeException(message, e.getMessage(), e);
	        }
	    }

}
