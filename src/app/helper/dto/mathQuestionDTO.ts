export class MathQuestionDTO{
    //region fields
    private question!: String;
    //endregion
 
    //region constructors
    public MathQuestionDTO(){
 
    }
    //endregion
 
    //region getters/setter
    public getQuestion(){
        return this.question;
    }

    public setQuestion(entry: String){
        this.question = entry;
    }
 
    //endregion
 
 }