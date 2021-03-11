
// import React from 'react'
// ​
// export default function ToDoListItems(props) {
//   return (
//     <div>
//             {props.entries.map(item => {
//               return (
//                 <div>
//                   <ul>
//                     <li>{item}</li>
//                   </ul>
//                 </div>
//               )
//             })}
//     </div>
//   )
// }


import React from 'react'

export default function ToDoListItems(props) {
  return (
    
         <div>
            {props.entries.map(item => {
              return (
                <div>
                  <ul>
                  <li>
                    {item}
                  </li>
                  </ul>
                </div>
            )}
            )}
          </div>
    
  )
}


