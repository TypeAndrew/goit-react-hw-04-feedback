import React from "react";

export class Section extends React.Component {

    
    render() {

        const { title,children } = this.props; 
        
        return (
            <section>{title}
                {children}
            </section>
        )  
    }
}