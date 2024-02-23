// import Skeleton from "react-loading-skeleton";
// import React from "react";
// const UclSkeleton = () => {
//   const numRows = 6; // Number of rows in the skeleton
//   const numGroups = 12; // Number of groups in the UCL table

//   return (
//     <div className="overflow-x-auto overflow-y-auto sm:overflow-x-scroll">
//       <table className="w-full">
//         <tbody>
//           {[...Array(numGroups)].map((_, groupIndex) => (
//             <React.Fragment key={groupIndex}>
//               <tr>
//                 <td className="p-4 font-semibold">
//                   <Skeleton width={100} />
//                 </td>
//               </tr>
//               {[...Array(numRows)].map((_, rowIndex) => (
//                 <tr key={`${groupIndex}-${rowIndex}`}>
//                   <td className="p-4 font-semibold">
//                     <Skeleton width={100} />
//                   </td>
//                   <td>
//                     <Skeleton width={50} />
//                   </td>
//                   <td>
//                     <Skeleton width={50} />
//                   </td>
//                   <td>
//                     <Skeleton width={50} />
//                   </td>
//                   <td>
//                     <Skeleton width={50} />
//                   </td>
//                   <td>
//                     <Skeleton width={50} />
//                   </td>
//                   <td>
//                     <Skeleton width={50} />
//                   </td>
//                   <td>
//                     <Skeleton width={50} />
//                   </td>
//                   <td>
//                     <Skeleton width={50} />
//                   </td>
//                   <td>
//                     <Skeleton width={50} />
//                   </td>
//                 </tr>
//               ))}
//             </React.Fragment>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UclSkeleton;
