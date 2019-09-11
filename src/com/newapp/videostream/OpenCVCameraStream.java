package com.newapp.videostream;


import org.opencv.core.*;
import org.opencv.videoio.VideoCapture;
import javax.swing.Timer;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class OpenCVCameraStream {
   //region Properties
    public static Mat frame = null;
    private static HttpStreamServer httpStreamService;
    static VideoCapture videoCapture;
    static Timer tmrVideoProcess;
    //endregion

    //region Methods
    public static void start() throws Exception {
        videoCapture = new VideoCapture();
        //videoCapture.open(0);
        videoCapture.open("/Users/s0r0282/Downloads/Concord User Training Level 1 Beginner Part 1.mp4");
        
        
        while (!videoCapture.isOpened()) { 
        	System.out.println("Exiting ..");
        	throw new Exception();
        }
        
        
        
        frame = new Mat();
        httpStreamService = new HttpStreamServer(frame);  
        new Thread(httpStreamService).start();
        
     /*   tmrVideoProcess = new Timer(100, new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                if (!videoCapture.read(frame)) {
                    tmrVideoProcess.stop();
                }
                //procesed image
                httpStreamService.imag = frame;
            }
        });
        
        
        tmrVideoProcess.start();*/

        while(true) {
        	if (!videoCapture.read(frame)) {
                System.out.println("No access to webcam");
            }
        	else {
            //procesed image
            httpStreamService.imag = frame;
        	}
        	//Thread.sleep(1000);
        }
    }

    public static void main(String[] args) throws Exception {
    	System.loadLibrary(Core.NATIVE_LIBRARY_NAME);//Load opencv native library  	
        start();
    }
}
