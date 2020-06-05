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
    const [location, setLocation] = useState("Nariobi");

    function handleNameChange(e){
        setName(e.target.value);
    }

    function handleLocationChange(e){
        setLocation(e.target.value);
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
                    <section>
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            name="location"
                            id="location"
                            value={location}
                            onChange={handleLocationChange}
                        />
                    </section>
                </form>
    <p>Hello {name} from {location}</p>
        </section>
    );
}