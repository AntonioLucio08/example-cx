import { LabelsLeftLayout } from "cx/ui";
// import { HtmlElement, TextField, ValidationGroup } from "cx/widgets";

// import './App.css';
//
// function App() {
//   return (
//       <cx>
//           <div className="widgets" layout={LabelsLeftLayout}>
//               <TextField
//                   label="Name"
//                   // value:bind="$page.default"
//                   placeholder="Required"
//                   required
//               />
//           </div>
//       </cx>
//   );
// }
//
// export default App;
import { Button, MsgBox, TextField } from "cx/widgets";
import { Controller, HtmlElement, LabelsTopLayout } from "cx/ui";

class PageController extends Controller {
    onInit() {
        this.store.init("$page", {
            name: "Jane",
            disabled: true,
            todoList: [
                { id: 1, text: "Learn Cx", done: true },
                { id: 2, text: "Feed the cat", done: false },
                { id: 3, text: "Take a break", done: false }
            ],
            count: 0
        });
    }

    greet() {
        let name = this.store.get("$page.name");
        MsgBox.alert(`Hello, ${name}!`);
    }
}

export const App = (
    <cx>
        <div class="widgets">
            <div layout={LabelsTopLayout} controller={PageController}>
                <TextField label="Name" value:bind="$page.name" />
                <Button onClick="greet">Greet</Button>
            </div>
        </div>
    </cx>
);
