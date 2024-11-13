
function Appointment(props) {

  const dt = new Date(`${ props.booking_date }T${ props.booking_hour }`);

  return (
    <tr>
      <td>{ props.user }</td>
      <td>{ props.doctor }</td>
      <td>{ props.service }</td>

      <td>          {/* data / hora */ }
        {
          new Intl.DateTimeFormat('pt-BR', {
            dateStyle: 'short',
            timeStyle: 'short', // Adiciona a hora ao formato
          }).format(dt)
        }
      </td>

      <td className="text-center">            {/* price */ }
        {
          new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.price)
        }
      </td>

      <td className="text-end">
        <div className="d-flex">
          <div className="d-inline me-3">
            <button
              onClick={ () => props.clickEdit(props.id_appointment) }
              className="btn btn-sm btn-primary">
              <i className="bi bi-pencil-square"></i>
            </button>
          </div>

          <button onClick={ () => props.clickDelete(props.id_appointment) }
            className="btn btn-sm btn-danger">
            <i className="bi bi-trash"></i>
          </button>
        </div>

      </td>
    </tr>
  )
}

export default Appointment;


//2024-11-15T08:00:00
// const dt = new Date(props.booking_date + "T" + props.booking_hour);
{/* <td>
  {
    new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short' }).format(dt)
  }
</td> */}
