export class mathQuestionDTO{
    //region fields
    private question!: String;
    //endregion
 
    //region constructors
    public mathQuestionTO(){
 
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