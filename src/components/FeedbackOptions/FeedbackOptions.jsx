
export function FeedbackOptions(props){

  // let n = 0;
   const { onLeaveFeedback, options } = props;
   return (
      
      <p>
         {options.map(status => ( 
            <span key={status }>
             {<button name={status} onClick={onLeaveFeedback}>{status}</button>}
            </span>
         ))}
      </p> 
        
   );
  
}