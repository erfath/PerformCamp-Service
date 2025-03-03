import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';




const Goal = () => {

  const [tasks, setTasks] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [user] = useAuthState(auth);


  //get tasks by email
    useEffect(() => {
        if (user) {
            fetch(`https://performcamp-server.onrender.com/task/${user?.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log('user task', data);
                    setTasks(data)
                })
        }
    }, [user]);

    //get review by email
    useEffect(() => {
      if (user) {
          fetch(`https://performcamp-server.onrender.com/employeeReviews/${user?.email}`, {
              method: 'GET',
              headers: {
                  'authorization': `Bearer ${localStorage.getItem('accessToken')}`
              }
          })
              .then(res => res.json())
              .then(data => {
                  
                  setReviews(data)
              })
      }
  }, [user]);

  //get feedback by email
  useEffect(() => {
    if (user) {
        fetch(`https://performcamp-server.onrender.com/feedback/${user?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setFeedbacks(data)
            })
    }
}, [user]);

    return (
        <div>
          <div>
  
  <div className="flex flex-col lg:flex-row py-5">
    <div className=" text-center px-6">
      <div className="bg-blue-500 rounded-lg flex items-center justify-center border border-gray-200">
        <div className="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.995 24h-1.995c0-3.104.119-3.55-1.761-3.986-2.877-.664-5.594-1.291-6.584-3.458-.361-.791-.601-2.095.31-3.814 2.042-3.857 2.554-7.165 1.403-9.076-1.341-2.229-5.413-2.241-6.766.034-1.154 1.937-.635 5.227 1.424 9.025.93 1.712.697 3.02.338 3.815-.982 2.178-3.675 2.799-6.525 3.456-1.964.454-1.839.87-1.839 4.004h-1.995l-.005-1.241c0-2.52.199-3.975 3.178-4.663 3.365-.777 6.688-1.473 5.09-4.418-4.733-8.729-1.35-13.678 3.732-13.678 4.983 0 8.451 4.766 3.732 13.678-1.551 2.928 1.65 3.624 5.09 4.418 2.979.688 3.178 2.143 3.178 4.663l-.005 1.241zm-13.478-6l.91 2h1.164l.92-2h-2.994zm2.995 6l-.704-3h-1.615l-.704 3h3.023z"/></svg>
        </div>
        <div className="w-2/3 bg-blue-300 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
          <h2 className="font-bold text-sm">Complete Tasks</h2>
          <p className="text-xs text-gray-600">
            Submit your assigned task before deadline
          </p>
        </div>
      </div>
    </div>
    <div className=" invisible lg:visible flex justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z"/></svg>
    </div>
    <div className=" text-center px-6">
      <div className="bg-green-500 rounded-lg flex items-center justify-center border border-gray-200">
        <div className="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-4 13v1h-4v-1h4zm-6.002 1h-10.997l-.001-.914c-.004-1.05-.007-2.136 1.711-2.533.789-.182 1.753-.404 1.892-.709.048-.108-.04-.301-.098-.407-1.103-2.036-1.305-3.838-.567-5.078.514-.863 1.448-1.359 2.562-1.359 1.105 0 2.033.488 2.545 1.339.737 1.224.542 3.033-.548 5.095-.057.106-.144.301-.095.41.14.305 1.118.531 1.83.696 1.779.41 1.773 1.503 1.767 2.56l-.001.9zm-9.998-1h8.999c.003-1.014-.055-1.27-.936-1.473-1.171-.27-2.226-.514-2.57-1.267-.174-.381-.134-.816.119-1.294.921-1.739 1.125-3.199.576-4.111-.332-.551-.931-.855-1.688-.855-.764 0-1.369.31-1.703.871-.542.91-.328 2.401.587 4.09.259.476.303.912.13 1.295-.342.757-1.387.997-2.493 1.252-.966.222-1.022.478-1.021 1.492zm18-3v1h-6v-1h6zm0-3v1h-6v-1h6zm0-3v1h-6v-1h6z"/></svg>
        </div>
        <div className="w-2/3 bg-green-300 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
          <h2 className="font-bold text-sm">Update Reviews</h2>
          <p className="text-xs text-gray-600  ">
            Share your achievements and get rewarded
          </p>
        </div>
      </div>
    </div>
    <div className=" invisible lg:visible flex justify-center items-center ">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z"/></svg>
    </div>
    <div className=" text-center px-6">
      <div className="bg-red-500 rounded-lg flex items-center justify-center border border-gray-200">
        <div className="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"/></svg>
        </div>
        <div className="w-2/3 bg-red-300 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
          <h2 className="font-bold text-sm">Resolve Backlog</h2>
          <p className="text-xs text-gray-600">
            Analyze feedbacks to make it right!
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<div className=" py-10 px-10 ">
  <div className="grid grid-cols-1 gap-20 lg:grid-cols-2  lg:gap-10">
    <h2 className='text-center lg:text-3xl text-xl font-bold text-teal-500'>Task Progress</h2>
    <div className="flex items-center flex-wrap max-w-md px-10 bg-white shadow-xl rounded-2xl h-20"
       x-data="{ circumference: 2 * 2 * Math.PI, percent: 20 }"
       >
          <div className="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full">
          <svg className="w-32 h-32 transform translate-x-1 translate-y-1" x-cloak aria-hidden="true">
            <circle r="50" cx="55" cy="49" stroke="#d3d3d3" stroke-width="12" fill="none" stroke-dasharray="" stroke-dashoffset="0" pathlength="360" transform="rotate(135 55 55)" />
            <circle r="50" cx="55" cy="49" stroke="blue" stroke-width="8" fill="none" stroke-dasharray="180 270" stroke-dashoffset="0" stroke-linecap="round" pathlength="360" transform="rotate(135 55 55)" id="knobinsidering" />
            <g color="green">
            <text x="60" y="60" text-anchor="middle" fill='blue' className='text-2xl Rrrrr font-bold' alignment-baseline="middle" >{tasks.length}</text></g>
            </svg>
            
          </div>
          <p className="ml-10 font-medium text-blue-600 text-center sm:text-xl">In Progress</p>

          
      </div>
    
    
    <div className="flex items-center flex-wrap max-w-md px-10 bg-white shadow-xl rounded-2xl h-20"
       
       >
          <div className="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full">
          <svg className="w-32 h-32 transform translate-x-1 translate-y-1" x-cloak aria-hidden="true">
            <circle r="50" cx="55" cy="49" stroke="wheat" stroke-width="12" fill="none" stroke-dasharray="" stroke-dashoffset="0" pathlength="360" transform="rotate(135 55 55)" />
            <circle r="50" cx="55" cy="49" stroke="green" stroke-width="8" fill="none" stroke-dasharray="250 270" stroke-dashoffset="0" stroke-linecap="round" pathlength="360" transform="rotate(135 55 55)" id="knobinsidering" />
            <text x="60" y="60" text-anchor="middle" fill='green' className='text-2xl font-bold' alignment-baseline="middle" >{reviews.length}</text>
            </svg>
            
            
          </div>
          <p className="ml-10 font-medium text-green-600 sm:text-xl">Completed</p>
      </div>
    <div className="flex items-center  flex-wrap max-w-md px-10 lg:my-10 bg-white shadow-xl rounded-2xl h-20"
       
       >
          <div className="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full">
            <svg className="w-32 h-32 transform translate-x-1 translate-y-1" x-cloak aria-hidden="true">
            <circle r="50" cx="55" cy="49" stroke="pink" stroke-width="12" fill="none" stroke-dasharray="" stroke-dashoffset="0" pathlength="360" transform="rotate(135 55 55)" />
            <circle r="50" cx="55" cy="49" stroke="red" stroke-width="8" fill="none" stroke-dasharray="90 270" stroke-dashoffset="0" stroke-linecap="round" pathlength="360" transform="rotate(135 55 55)" id="knobinsidering" />
            <text x="60" y="60" text-anchor="middle" fill='red' className='text-2xl font-bold' alignment-baseline="middle" >{feedbacks.length}</text>
            </svg>
            
            
          </div>
          <p className="ml-10 font-medium text-red-600 sm:text-xl">Backlogged</p>
      </div>
  </div>
</div>

        </div>
    );
};

export default Goal;