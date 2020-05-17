export {taskConcordance};
class taskConcordance{
    givenString : string;
    words : Array<string>;
    constructor(idInput : string, idOutput : string){
        let outsideLabelInput = document.getElementById(idInput);
        //outsideLabelShow.innerHTML = valueToShow.toString();
        this.givenString = outsideLabelInput.value;
        // Splitting the words into an array
        let forSplit = ["!",";",","," "];
        this.words = this.givenString.split(/\W/);
        // converting to lower case
        for (let i=0 ; i < this.words.length; i++){
            this.words[i] = this.words[i].toLocaleLowerCase();
        }
        // removing nulls
        let properWords = [];
        for (let i = 0 ; i < this.words.length; i ++){
            if (this.words[i]!=""){
                properWords.push(this.words[i]);
            }
        }
        let outsideLabeslShow = document.getElementById(idOutput); 
        outsideLabeslShow.innerHTML = properWords.toString();
    }
}