// import JitsiMeetJS from "@lyno/lib-jitsi-meet";

JitsiMeetJS.init();

const options = {
    roomName: 'FULLSTACKACADEMYEXAMPLE',
    width: 700,
    height: 700,
    parentNode: document.querySelector('#meet')
};

const connection = new JitsiMeetJS.JitsiConnection(null, null, {})

// const domain = 'meet.jit.si';
// const options = {
//     roomName: 'FULLSTACKACADEMYEXAMPLE',
//     width: 700,
//     height: 700,
//     parentNode: document.querySelector('#meet')
// };
// const api = new JitsiMeetExternalAPI(domain, options);
