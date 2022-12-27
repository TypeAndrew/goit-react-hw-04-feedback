
export function FeedbackOptions(props){

  // let n = 0;
   const { onLeaveFeedback, options } = props;
   return (
      
      <p>
         {options.map(status => ( 
            <span key={status }>
             {status.title !== 'total' && status.title !== 'positive' &&
               <button id={status} onClick={onLeaveFeedback}>{status}</button>}
            </span>
         ))}
      </p> 
        
   );
  
}