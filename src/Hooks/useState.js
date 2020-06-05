import React, {useState} from "react";

// export default class ClassDemo extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             name: "Agatha"
//         };
//         this.handleNameChange = this.handleNameChange.bind(this);
//     }

//     handleNameChange(e){
//         this.setState({
//             name: e.target.value
//         });
//     }

//     render(){
//         return(
//             <section>
                
//         <p>Hello {this.state.name}</p>
//             </section>
//         );
//     }
// }

//export default ClassDemo;

export default function HookDemo(props){
    const [name, setName] = useState("Agata");

    function handleNameChange(e){
        setName(e.target.value);
    }

    return(
        <section>
           <form autoComplete="off">
                    <section>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </section>
                </form>
                <p>Hello {name}</p>
        </section>
    );
}