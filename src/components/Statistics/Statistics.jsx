
const statusesFeedback = [{ title: 'good' }, { title: 'neutral' }, { title: 'bad' }, { title: 'total' }, { title: 'percetage' }];
export function Statistics(props) {
  
  
  let n = 0;
  return (
  
      <ul>
        {statusesFeedback.map(status => (
        
          <li key={n++}> {status.title} : {props[status.title]} {status.title === 'percetage' ? '%' : ''} </li>
        
        ))}
      </ul>
  )
}