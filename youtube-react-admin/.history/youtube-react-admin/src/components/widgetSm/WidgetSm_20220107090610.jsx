// import "./widgetSm.css";
// import { Visibility } from "@material-ui/icons";
// import { useEffect, useState } from 'react';
// import { axios } from 'axios';

// export default function WidgetSm() {
//   const [user,setUser]=useState("kjhasgdfkjh");
//   console.log(user);

//   useEffect(() => {

//     const getuser=async()=>{

//       try {
//         const res=await axios.get("ttp://localhost:5000/api/all")
//         console.log(res)
        
//       } catch (error) {
        
//       }
//     }
//     getuser()
//   })
//   return (
//     <div className="widgetSm">
//       <span className="widgetSmTitle">New Join Members</span>
//       <ul className="widgetSmList">
//         <li className="widgetSmListItem">
//           <img
//             src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
//             alt=""
//             className="widgetSmImg"
//           />
//           <div className="widgetSmUser">
//             <span className="widgetSmUsername">Anna Keller</span>
//             <span className="widgetSmUserTitle">Software Engineer</span>
//           </div>
//           <button className="widgetSmButton">
//             <Visibility className="widgetSmIcon" />
//             Display
//           </button>
//         </li>
//         <li className="widgetSmListItem">
//           <img
//             src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
//             alt=""
//             className="widgetSmImg"
//           />
//           <div className="widgetSmUser">
//             <span className="widgetSmUsername">Anna Keller</span>
//             <span className="widgetSmUserTitle">Software Engineer</span>
//           </div>
//           <button className="widgetSmButton">
//             <Visibility className="widgetSmIcon" />
//             Display
//           </button>
//         </li>
//         <li className="widgetSmListItem">
//           <img
//             src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
//             alt=""
//             className="widgetSmImg"
//           />
//           <div className="widgetSmUser">
//             <span className="widgetSmUsername">Anna Keller</span>
//             <span className="widgetSmUserTitle">Software Engineer</span>
//           </div>
//           <button className="widgetSmButton">
//             <Visibility className="widgetSmIcon" />
//             Display
//           </button>
//         </li>
//         <li className="widgetSmListItem">
//           <img
//             src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
//             alt=""
//             className="widgetSmImg"
//           />
//           <div className="widgetSmUser">
//             <span className="widgetSmUsername">Anna Keller</span>
//             <span className="widgetSmUserTitle">Software Engineer</span>
//           </div>
//           <button className="widgetSmButton">
//             <Visibility className="widgetSmIcon" />
//             Display
//           </button>
//         </li>
//         <li className="widgetSmListItem">
//           <img
//             src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
//             alt=""
//             className="widgetSmImg"
//           />
//           <div className="widgetSmUser">
//             <span className="widgetSmUsername">Anna Keller</span>
//             <span className="widgetSmUserTitle">Software Engineer</span>
//           </div>
//           <button className="widgetSmButton">
//             <Visibility className="widgetSmIcon" />
//             Display
//           </button>
//         </li>
//       </ul>
//     </div>
//   );
// }
