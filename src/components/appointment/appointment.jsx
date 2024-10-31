/* eslint-disable react/prop-types */

export default function Appointment(props) {    // para receber as props enviadas da pagina

  const dt = new Date(props.booking_date);
  return (

    <tr>
      <td scope='col'>{ props.user }</td>
      <td scope='col'>{ props.doctor }</td>
      <td scope='col'>{ props.service }</td>
      
      <td scope='col'>
        { new Intl.DateTimeFormat('pt-br', { dateStyle: 'short' }).format(dt) } - { props.booking_hour }
      </td>

      <td scope='col' className="text-end">
        { new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(props.price) }
      </td>

      <td scope='col'>
        <div>
          <button className="btn btn-sm btn-primary">Editar</button>
        </div>
        <div>
          <button className="btn btn-sm btn-danger">Excluir</button>
        </div>
      </td>

    </tr>

  )
}

// <Appointment
//   key={ ap.id_appointment }      // envidando as props para o component
//   id_appointment={ ap.id_appointment }
//   user={ ap.user }
//   doctor={ ap.doctor }
//   service={ ap.service }
//   booking_date={ ap.booking_date }
//   booking_hour={ ap.booking_hour }
//   price={ ap.price }
//   clickEdite={ ClickEdite }
//   clickDelete={ ClickDelete }
// />