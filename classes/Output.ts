export {Output};
class Output{
    toShow(idElem : string , valueToShow : any) {
        let outsideLabelShow = document.getElementById(idElem)
        outsideLabelShow.innerHTML = valueToShow.toString();
    }
}