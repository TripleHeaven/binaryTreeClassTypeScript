export {taskConcordance};
class taskConcordance{
    givenString : string;
    words : Array<string>;
    constructor(idInput : string, idOutput : string){
        let outsideLabelInput = document.getElementById(idInput);
        //outsideLabelShow.innerHTML = valueToShow.toString();
        this.givenString = outsideLabelInput.value;
        // Splitting the words into an array
        this.words = this.givenString.split(" ");
        let outsideLabeslShow = document.getElementById(idOutput); 
        outsideLabeslShow.innerHTML = this.words.toString().toLocaleLowerCase();
    }
}