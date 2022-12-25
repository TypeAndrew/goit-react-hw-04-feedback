export function Section(props) {

        const { title,children } = props; 
        
        return (
            <section>{title}
                {children}
            </section>
        )  
    
}