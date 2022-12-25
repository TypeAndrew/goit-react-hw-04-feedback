
export function FeedbackOptions(props){

   let n = 0;
   const { onLeaveFeedback, options } = props;
   return (
      
      <p>
         {options.map(status => ( 
            <span key={n++}>
             {status.title !== 'total' && status.title !== 'positive' &&
               <button id={status.title} onClick={onLeaveFeedback}>{status.title}</button>}
            </span>
         ))}
      </p> 
        
   );
  
}