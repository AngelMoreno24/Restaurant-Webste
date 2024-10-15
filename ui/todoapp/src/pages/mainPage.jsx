import {Component } from 'react';

class App extends Component{
  
  constructor(props){
    super(props);
    this.state={
      notes:[]
    }
  }

  API_URL="http://localhost:5071/"

  componentDidMount(){
    this.refreshNotes();
  }

  async refreshNotes(){
    try {
      const response = await fetch(this.API_URL + "api/TodoApp/GetNotes");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.setState({ notes: data });
    } catch (error) {
      console.error("Failed to fetch notes:", error);
      // Optionally, set an error state or notify the user
    }
  }
    
  async addClick(){
    var newNotes=document.getElementById("newNotes").value;
    const data=new FormData();
    data.append("newNotes", newNotes);

    fetch(this.API_URL+"api/TodoApp/AddNotes",{
      method:"Post",
      body:data
    }).then(res=>res.json())
    .then((result)=>{
      alert(result)
      this.refreshNotes();
    });
  }

  async deleteClick(id){
    var newNotes=document.getElementById("newNotes").value;
    const data=new FormData();
    data.append("newNotes", newNotes);

    fetch(this.API_URL+"api/TodoApp/DeleteNotes?id="+id,{
      method:"Delete",
      body:data
    }).then(res=>res.json())
    .then((result)=>{
      alert(result)
      this.refreshNotes();
    });
  }

  render() {
    const{notes}=this.state;
    return (
      <div className="App">
        <h2>todo app</h2>
        <div>
          <button>Home</button>
          <button>asd</button>
          <button>asd</button>
        </div>
        <input id="newNotes"></input>
      <button onClick={()=>this.addClick()}>Add Notes</button>
      {notes.map(note=>

        <p class="card">
          <b>* {note.description}</b>
          <button onClick={()=>this.deleteClick(note.id)}>Delete</button>
        </p>
      )}
      </div>
    );
  }
}

export default App;
