import { useContext, useRef, useState } from 'react';
import { Data } from '../components/context';
import { useNavigate } from 'react-router-dom';

export default function Scan() {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [capturedImage, setCapturedImage] = useState('');
  const [cameraStatus, setCameraStatus] = useState(false);
  const { modelData, setModelData } = useContext(Data);
  const navigate = useNavigate();

  const startCamera = async () => {
    try {
      setCameraStatus(true);
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing the camera:', error);
    }
  };

  function stopCamera() {
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      setStream(null);
    }
  }

  const capturePhoto = () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.toDataURL('image/png'); // Convert to base64 data URL
    setCapturedImage(imageData); // Save the captured image data

    stopCamera();
  };

  const sendData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/upload-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set the correct content type
        },
        body: JSON.stringify({ imageData: capturedImage }),
      });

      if (response.ok) {
        console.log('Image data sent successfully');
      } else {
        console.error('Error sending image data to server');
        alert('Error sending image data to server');
      }

      const _data = await response.json();

      console.log(_data);
      setModelData(_data);

      // redirect to questions page
      navigate('/questions')
    } catch (error) {
      console.error('Error sending image data:', error);
    }
  };

  return (
    <>
      {cameraStatus && !capturedImage && (
        // Show camera and capture button when camera on and no image captured
        <div className='fixed w-full h-screen flex flex-col items-center overflow-hidden'>
          <video
            className='rounded-3xl w-[85vw] h-screen md:w-auto md:h-auto object-cover mb-5'
            style={{ maxHeight: '70vh' }}
            ref={videoRef}
            autoPlay
            playsInline
          />

          <a className='fixed bottom-20 left-10 bg-dark text-white rounded-full py-2 px-4' href="/scan">&lt;</a>

          <button
            className='w-20 h-20 mt-8 rounded-full bg-white text-white'
            onClick={capturePhoto}
          >
            <img src="/img/camera.png" className="h-9 m-auto" />
          </button>
        </div>
      )}

      {capturedImage && (
        <>
          {/* Show captured image and retake/ok buttons after an image is captured */}
          <div className='flex flex-col items-center'>
            <img
              className='rounded-3xl w-[85vw] h-screen md:w-auto md:h-auto object-cover mb-5'
              style={{ maxHeight: '70vh' }}
              src={capturedImage}
              alt='Captured'
            />
            <button
              className='px-4 py-2 bg-red-500 text-white rounded-lg'
              onClick={() => {
                setCapturedImage('');
                startCamera();
              }}
            >
              Retake
            </button>
            <br />
            <button
              className='px-4 py-2 bg-white text-bg rounded-full cursor-pointer'
              onClick={sendData}
            // dont href since it wont wait for the fetch to finish
            // also switched to button cuz <a> doesnt make sense here
            // href='/questions'
            >
              Ok
            </button>


          </div>

          {/* <div className='fixed bottom-5 left-5 right-5 p-5 flex justify-between'>
            <a className='bg-dark text-white rounded-full py-2 px-4' href="/">&lt;</a>

            <button
              className='px-4 py-2 bg-white text-bg rounded-full'
              onClick={startCamera}
            >
              Start Scanning →
            </button>
          </div> */}
        </>

      )}


      {!cameraStatus && !capturedImage && (

        <>
          {/* Show instructions and request camera permissions first */}
          <div className='lg:m-auto lg:max-w-[40%] mx-[10%] flex flex-col items-center'>


            <img src="/img/food.png" className="h-32 mt-12 mb-20" />
            <h1 className='text-4xl font-medium text-white mb-4'>Instructions</h1>
            <br />
            <div className="h-[3px] w-28 bg-white justify-center mb-8"></div>
            <div className=' flex flex-col gap-5 text-white mb-2 p-3'>
              <p>1. Scan food using camera. You may take multiple photos</p>
              <p>2. your photo will be processed with ai and stuff wowow</p>
              <p>3. Discover new ai enhanced recipes!</p>
            </div>
          </div>

          <div className='fixed bottom-5 left-5 right-5 p-5 flex justify-between'>
            <a className='bg-dark text-white rounded-full py-2 px-4' href="/">&lt;</a>

            <button
              className='px-4 py-2 bg-white text-bg rounded-full'
              onClick={startCamera}
            >
              Start Scanning →
            </button>
          </div>

        </>
      )}


    </>
  );
}
