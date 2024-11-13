
function DoctorRow(props) {

  return (
    <tr>
      <td>{ props.nameDoctor }</td>
      <td>{ props.specialty }</td>
      <td>{ props.service }</td>

      <td className="text-center">            {/* price */ }
        {
          new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.price)
        }
      </td>

      <td className="text-end">
        <div className="d-flex">
          <div className="d-inline me-3">
            <button
              onClick={ () => props.clickEdit(props.id_doctor) }
              className="btn btn-sm btn-primary">
              <i className="bi bi-pencil-square"></i>
            </button>
          </div>

          <button onClick={ () => props.clickDelete(props.id_doctor) }
            className="btn btn-sm btn-danger">
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  )
}

export default DoctorRow;




// export default function Doctors(props) {
//   return (
//     <tr>
//       <td>{ props.doctor }</td>
//       <td>{ props.specialty }</td>
//       <td>{ props.service }</td>


//       {/* price */ }
//       <td className="text-center">
//         {
//           new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.price)
//         }
//       </td>

//       <td className="text-end">

//         <div className="d-flex">
//           <div className="d-inline me-3">
//             <button
//               onClick={ () => props.clickEdit(props.id_doctor) }
//               className="btn btn-sm btn-primary">
//               <i className="bi bi-pencil-square"></i>
//             </button>
//           </div>

//           <button onClick={ () => props.clickDelete(props.id_doctor) }
//             className="btn btn-sm btn-danger">
//             <i className="bi bi-trash"></i>
//           </button>
//         </div>

//       </td>
//     </tr>

//   )
// };

// export default Doctors;